/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {
    let result = [];
    let P = [];
    
    // Initialize permutation P with numbers 1 to m
    for (let i = 1; i <= m; i++) {
        P.push(i);
    }

    // Process each query
    for (let q of queries) {
        let index = P.indexOf(q);   // find the index of the query number in P
        result.push(index);            // add the index to result
        console.log(result)
        P.splice(index, 1);         // remove the element from its current position
        P.unshift(q);               // move it to the front
    }

    return result;
};

console.log(processQueries( [3,1,2,1], 5))