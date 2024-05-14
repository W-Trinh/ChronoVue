require('sparqljs')

export function queryWikidata(){
  fetch('https://query.wikidata.org/sparql?format=json&query=SELECT ?item ?itemLabel WHERE { ?item wdt:P31 wd:Q146. SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". } } LIMIT 10')
  .then(response => response.json())
  .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

export function queryDbpedia(){
  fetch('http://dbpedia.org/sparql?format=json&query=SELECT ?s ?p ?o WHERE {?s ?p ?o} LIMIT 10')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

}