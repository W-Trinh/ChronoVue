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
    const wallahi = await queryWikidata(
        'PREFIX wdt:<http://www.wikidata.org/prop/direct/>'+
        'PREFIX wd:<http://www.wikidata.org/entity/>'+
        'SELECT ?idcountry ?label WHERE'+
        '{?idcountry wdt:P31 wd:Q6256.'+
        '?idcountry wdt:P361 wd:Q458.'+
        '?idcountry rdfs:label ?label.'+
        'FILTER((LANG(?label)) = \"en\")}'
    );

    for (const elt of wallahi){
        getHistoricalEventFromCountry(elt.idcountry.value, elt.label.value)
    }
}

export async function getHistoricalEventFromCountry(country, countryName){
    const wallahi = await queryWikidata(
        'PREFIX wdt:<http://www.wikidata.org/prop/direct/>'+
        'PREFIX wd:<http://www.wikidata.org/entity/>'+
        'SELECT ?event ?label ?start ?end WHERE {'+
          '?event wdt:P31/wdt:P279* wd:Q13418847.'+
          '?event rdfs:label ?label;'+
            'wdt:P17 <' + country + '>.'+
          //'?event wdt:P31 ?theme.'+
          //'?theme rdfs:label ?themeLabel.'+
          '?event wdt:P580 ?start.'+
          '?event wdt:P582 ?end.'+
          //'FILTER((LANG(?themeLabel)) = \"en\")'+
          'FILTER((LANG(?label)) = \"en\")}'
    )
        console.log(countryName)
        console.log(wallahi)
}