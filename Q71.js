var garbageCollection = function(garbage, travel) {
    let totalTime = 0;
    let lastSeen = { 'M': 0, 'P': 0, 'G': 0 };

    // Step 1: Count time to pick up garbage
    for (let i = 0; i < garbage.length; i++) {
        totalTime += garbage[i].length; // 1 minute per garbage piece
        for (let type of garbage[i]) {
            lastSeen[type] = i; // Track last house where each type exists
        }
    }

    // Step 2: Add travel time for each truck
    for (let i = 1; i < garbage.length; i++) {
        for (let type in lastSeen) {
            if (lastSeen[type] >= i) {
                totalTime += travel[i - 1]; // Add travel time if truck 
                // needs to pass this road
            }
        }
    }

    return totalTime;
};

console.log(garbageCollection(["G","P","GP","GG"],  [2,4,3]))