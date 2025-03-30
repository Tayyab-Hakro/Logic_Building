/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
return names.map((name,index) => [name, heights[index]]).sort((a,b) => b[1] - a[1]).map((pair) => pair[0]);   
    };

    
    console.log(sortPeople(["Mary","John","Emma"],  [180,165,170]) )
