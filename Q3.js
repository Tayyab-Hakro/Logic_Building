//Find the possible subarray pairs of elements

function subarray(arr) {
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 2; j < arr.length; j++) {
    result.push(arr.slice(i, j + 1));
      }
    }
  
    return result;
  }
  
  console.log(subarray([1, 2, 3, 4, 5, 6]));
  