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
    const data = await queryWikidata('PREFIX wdt:<http://www.wikidata.org/prop/direct/> PREFIX wd:<http://www.wikidata.org/entity/> SELECT ?idcountry ?label WHERE {?idcountry wdt:P31 wd:Q6256. ?idcountry wdt:P361 wd:Q458. ?idcountry rdfs:label ?label. FILTER((LANG(?label)) = "en")}');
    for (const elt of data){
        console.log(elt.idcountry.value)
        console.log(elt.label.value)
    }
}