export function getRandomHistoricalEvents(data) {
    let allEvents = [];
    
    // Parcourir tous les pays
    for (let country in data) {
        if (data.hasOwnProperty(country)) {
            // Parcourir tous les événements historiques du pays
            for (let event in data[country]) {
                if (data[country].hasOwnProperty(event)) {
                    // Ajouter l'événement à la liste des événements avec la clé
                    allEvents.push({ key: event, details: data[country][event] });
                }
            }
        }
    }

    // Mélanger la liste des événements
    for (let i = allEvents.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [allEvents[i], allEvents[j]] = [allEvents[j], allEvents[i]];
    }

    // Sélectionner les quatre premiers événements (ou moins s'il y en a moins de quatre)
    let selectedEvents = allEvents.slice(0, 4);

    // Construire le dictionnaire des événements sélectionnés
    let result = {};
    selectedEvents.forEach(event => {
        result[event.key] = event.details;
    });

    return result;
}