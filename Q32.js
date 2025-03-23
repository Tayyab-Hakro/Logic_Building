/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
    // Step 1: Create a map to store userID => set of unique minutes
    const userMinutesMap = new Map();

    // Step 2: Populate the map with unique active minutes for each user
    for (const [userId, time] of logs) {
        if (!userMinutesMap.has(userId)) {
            userMinutesMap.set(userId, new Set());
        }
        userMinutesMap.get(userId).add(time);
    }

    // Step 3: Initialize an array of size k with zeros
    const answer = new Array(k).fill(0);

    // Step 4: Count how many users have the same UAM
    for (const [userId, timesSet] of userMinutesMap.entries()) {
        const uam = timesSet.size; // Unique Active Minutes
        if (uam >= 1 && uam <= k) {
            answer[uam - 1] += 1;
        }
    }

    // Step 5: Return the answer array
    return answer;
};
