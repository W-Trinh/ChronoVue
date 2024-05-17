export function getElementsAleatoire(dictionnaire) {
    
    let res = []

    for (let i = 0; i < 4; i++) {

    var cles = Object.keys(dictionnaire);
    var indiceAleatoire = Math.floor(Math.random() * cles.length);
    var cleAleatoire = cles[indiceAleatoire];
    while(cleAleatoire == null || res.includes(cleAleatoire)){
        indiceAleatoire = Math.floor(Math.random() * cles.length);
        cleAleatoire = cles[indiceAleatoire];
    }
    res.push(cleAleatoire)
    }
    return res;
  }