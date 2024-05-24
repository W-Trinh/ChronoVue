export function getRandomHistoricalEvents(dictionary) {
    const keys = Object.keys(dictionary);

    if (keys.length < 4) {
        throw new Error("The dictionary must have at least four elements.");
    }

    const randomIndices = [];
    while (randomIndices.length < 4) {
        const index = Math.floor(Math.random() * keys.length);
        if (!randomIndices.includes(index)) {
            randomIndices.push(index);
        }
    }

    const randomElements = {};
    randomIndices.forEach(index => {
        const key = keys[index];
        randomElements[key] = dictionary[key];
    });

    return randomElements;
}

export function reorganizeData(data) {
    const newDictionary = {};
    // Loop through each country in the given dictionary
    for (const country in data) {
        // Loop through each event in the current country
        for (const event in data[country]) {
            // Create a new key for the event in the new dictionary
            if (!newDictionary[event]) {
                newDictionary[event] = {};
            }
            // Add event data
            newDictionary[event] = {
                ...data[country][event],
                "country": country // Add country name
            };
        }
    }

    removeEntriesWithCertainValue(newDictionary, "abstract", "No information found");
        
    return newDictionary;
}

function removeEntriesWithCertainValue(dictionary, targetKey, targetValue) {
    for (const key in dictionary) {
        if (dictionary[key][targetKey] === targetValue) {
            delete dictionary[key];
        }
    }
}

export function addDictEntry(originalDict) {
    const reorganizedDict = {};

    for (const key in originalDict) {
        if (originalDict.hasOwnProperty(key)) {
            reorganizedDict[key] = {};
            reorganizedDict[key][key] = originalDict[key];
        }
    }

    return reorganizedDict;
}
