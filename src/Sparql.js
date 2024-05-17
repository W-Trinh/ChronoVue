require('sparqljs')

async function queryWikidata(query){
    const response = await fetch('https://query.wikidata.org/sparql?format=json&query=' + query);
    const data = await response.json();
    return data.results.bindings;
}

async function queryDbpedia(query) {
    const response = await fetch('http://dbpedia.org/sparql?format=json&query=' + query);
    const data = await response.json();
    return data.results.bindings;
  }

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
        result[country.label.value] = await getHistoricalEventFromCountry(country.idcountry.value, country.label.value)
    }

    return(result)
}

export async function getHistoricalEventFromCountry(country, countryName){
    let result = {}
    const wallahi = await queryWikidata(
        'PREFIX wdt:<http://www.wikidata.org/prop/direct/>'+
        'PREFIX wd:<http://www.wikidata.org/entity/>'+
        'SELECT ?event ?label ?themeLabel ?start ?end ?freebase WHERE {'+
          '?event wdt:P31/wdt:P279* wd:Q13418847.'+
          '?event rdfs:label ?label;'+
            'wdt:P17 <' + country + '>;'+
            'wdt:P646 ?freebase.'+
          '?event wdt:P31 ?theme.'+
          '?theme rdfs:label ?themeLabel.'+
          '?event wdt:P580 ?start.'+
          '?event wdt:P582 ?end.'+
          'FILTER((LANG(?themeLabel)) = \"en\")'+
          'FILTER((LANG(?label)) = \"en\")}'
    )

    for (const event of wallahi){
        if (typeof(result[event.label.value]) === 'undefined'){
            const abstract = await getAbstractOfEvent(event.freebase.value)
            result[event.label.value] = {
                'start':event.start.value,
                'end':event.end.value,
                'theme': [event.themeLabel.value],
                'abstract': abstract,
            }
        } else {
            result[event.label.value]['theme'].push(event.themeLabel.value)
        }
    }
    return result
}

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