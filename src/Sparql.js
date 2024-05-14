require('sparqljs')

export function queryWikidata(query){
  fetch('https://query.wikidata.org/sparql?format=json&query=' + query)
  .then(response => response.json())
  .then(data => {
        return(data)
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

export function queryDbpedia(query){
    return fetch('http://dbpedia.org/sparql?format=json&query=' + query)
    .then(response => response.json())
    .then(data => {
        return(data)
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
