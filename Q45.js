var processQueries = function(queries, m) {
    let P = Array.from({ length: m }, (_, i) => i + 1); // Create list P = [1,2,...,m]
    let result = [];

    for (let q of queries) {
        let index = P.indexOf(q); // Find the position of q in P
        result.push(index); // Store the position
        P.splice(index, 1); // Remove q from its position
        P.unshift(q); // Move q to the front
    }

    return result;
};
