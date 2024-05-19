export function getRandomHistoricalEvents(dictionary) {
    let keys = Object.keys(dictionary);

    if (keys.length < 4) {
        throw new Error("The dictionary must have at least four elements.");
    }

    let randomIndices = [];
    while (randomIndices.length < 4) {
        let index = Math.floor(Math.random() * keys.length);
        if (!randomIndices.includes(index)) {
            randomIndices.push(index);
        }
    }

    let randomElements = {};
    randomIndices.forEach(index => {
        let key = keys[index];
        randomElements[key] = dictionary[key];
    });

    return randomElements;
}

export function reorganizeData(data) {
    let nouveauDictionnaire = {};
    
    // Parcourir chaque pays dans le dictionnaire donné
    for (let country in data) {
        // Parcourir chaque bataille dans le pays actuel
        for (let event in data[country]) {
            // Créer une nouvelle clé pour la bataille dans le nouveau dictionnaire
            if (!nouveauDictionnaire[event]) {
                nouveauDictionnaire[event] = {};
            }
            // Ajouter les données de la bataille
            nouveauDictionnaire[event] = {
                ...data[country][event],
                "country": country // Ajouter le nom du pays
            };
        }
    }
    
    return nouveauDictionnaire;
}
