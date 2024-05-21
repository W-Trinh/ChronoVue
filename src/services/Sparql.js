require('sparqljs')

/*
    Function used to query Wikidata API
    Should not be used outside of this file
*/
async function queryWikidata(query){
    const response = await fetch('https://query.wikidata.org/sparql?format=json&query=' + query);
    const data = await response.json();
    return data.results.bindings;
}

/*
    Function used to query Dbpedia API
    Should not be used outside of this file
*/
async function queryDbpedia(query) {
    const response = await fetch('http://dbpedia.org/sparql?format=json&query=' + query);
    const data = await response.json();
    return data.results.bindings;
  }

/*
    Get every country of the european union
*/
export async function getCountries(){
    let result = {}
    const wallahi = await queryWikidata(
        'PREFIX wdt:<http://www.wikidata.org/prop/direct/>'+
        'PREFIX wd:<http://www.wikidata.org/entity/>'+
        'SELECT ?idcountry ?label WHERE'+
        '{?idcountry wdt:P31 wd:Q6256.'+
        '?idcountry wdt:P361 wd:Q458.'+
        '?idcountry rdfs:label ?label.'+
        'FILTER((LANG(?label)) = \"en\")}'
    );

    for (const country of wallahi){
        result[country.label.value] = await getHistoricalEventFromCountry(country.idcountry.value)
    }
    console.log(result)
    return(result)
}

/*
    Get every event from a country
    Should be used in the home and content page 
    @param country : The ID of the country inside the Wikidata Database
*/
export async function getHistoricalEventFromCountry(country, date, when){
    let filterDate = ""
    if (when==="before"){
        filterDate = "FILTER (?start > \""+ date +"\"^^xsd:dateTime)"
    } else if (when==="after"){
        filterDate = "FILTER (?end < \""+ date +"\"^^xsd:dateTime)"
    }

    let result = {}
    const wallahi = await queryWikidata(
        'PREFIX wdt:<http://www.wikidata.org/prop/direct/>'+
        'PREFIX wd:<http://www.wikidata.org/entity/>'+
        'SELECT DISTINCT ?event ?start ?end ?label ?desc ?image WHERE {'+
          '?event wdt:P31/wdt:P279* wd:Q13418847.'+
          '?event rdfs:label ?label;'+
            'wdt:P17 <' + country + '>;'+
            'schema:description ?desc;'+
            'wdt:P580 ?start;'+
            'wdt:P582 ?end;'+
            'wdt:P18 ?image.'+
            filterDate +
          'FILTER((LANG(?desc)) = \"en\")'+  
          'FILTER((LANG(?label)) = \"en\")}'
    )

    for (const event of wallahi){
        result[event.label.value] = {
            id: event.event.value,
            start: event.start.value,
            end: event.end.value,
            abstract: event.desc.value,
            image: event.image.value,
        }
    }
    return result
}

/*
    Get the information of an event 
    Should be used in the content page to display informations
    @param event : The ID of the event inside the Wikidata Database
*/
export async function getInfoOfEvent(event){
    let result = {}
    const wallahi = await queryWikidata(
        'PREFIX wdt:<http://www.wikidata.org/prop/direct/>'+
        'PREFIX wd:<http://www.wikidata.org/entity/>'+
        'SELECT DISTINCT ?label ?start ?end ?freebase ?image ?themeLabel ?desc WHERE {'+
            '<' + event + '> rdfs:label ?label;'+
            'schema:description ?desc;'+
            'wdt:P31 ?theme;'+
            'wdt:P18 ?image;'+
            'wdt:P580 ?start;'+
            'wdt:P582 ?end.'+
          'OPTIONAL {<' + event + '>  wdt:P646 ?freebase}'+
          '?theme rdfs:label ?themeLabel.'+
          'FILTER((LANG(?themeLabel)) = \"en\")'+
          'FILTER((LANG(?label)) = \"en\")}'
    )
    console.log(wallahi)
    for (const event of wallahi){
        
        if (typeof(result[event.label.value]) === 'undefined'){

            let abstract = "undefined"
            if (typeof(event.freebase) !== 'undefined'){
                abstract = await getAbstractOfEvent(event.freebase.value)
            } else {
                abstract = event.desc.value
            }

            result[event.label.value] = {
                start:event.start.value,
                end:event.end.value,
                theme: [event.themeLabel.value],
                abstract: abstract,
                image: event.image.value,
            }
        } else {
            result[event.label.value]['theme'].push(event.themeLabel.value)
        }
    }

    return(result)
}

/*
    Get the abstract of an event from Dbpedia
    Used to link Dbpedia and Wikidata
    @param freebaseId : The ID of the event inside the Freebase ID.
*/
export async function getAbstractOfEvent(freebaseId){
    const wallahi = await queryDbpedia(
        'PREFIX dbo: <http://dbpedia.org/ontology/>'+
        'SELECT ?abstract WHERE {'+
        '?o owl:sameAs <http://rdf.freebase.com/ns/m.'+freebaseId.substring(3)+'>;'+
            'dbo:abstract ?abstract.'+
        'FILTER((LANG(?abstract )) = \"en\")'+
        '}'
    )
    if(wallahi.length>0){
        return(wallahi[0].abstract.value)
    } else {
        return("No information found")
    }
}

export async function getHistoricalEvent(country){
    let result = {}
    const wallahi = await queryWikidata(
        'PREFIX wdt:<http://www.wikidata.org/prop/direct/>'+
        'PREFIX wd:<http://www.wikidata.org/entity/>'+
        'SELECT DISTINCT ?event ?start ?end ?label ?desc ?image WHERE {'+
          '?event wdt:P31/wdt:P279* wd:Q13418847.'+
          '?event rdfs:label ?label;'+
            'wdt:P17 <' + country + '>;'+
            'schema:description ?desc;'+
            'wdt:P580 ?start;'+
            'wdt:P582 ?end;'+
            'wdt:P18 ?image.'+
          'FILTER((LANG(?desc)) = \"en\")'+  
          'FILTER((LANG(?label)) = \"en\")}'
    )

    for (const event of wallahi){
        result[event.label.value] = {
            id: event.event.value,
            start: event.start.value,
            end: event.end.value,
            abstract: event.desc.value,
            image: event.image.value,
        }
    }
    return result
}