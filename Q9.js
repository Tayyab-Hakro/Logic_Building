function findEquilibriumIndex(arr) {
    const totalSum = arr.reduce((acc, val) => acc + val, 0);
    console.log(totalSum)
    let leftSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      const rightSum = totalSum - leftSum - arr[i];
  
      if (leftSum === rightSum) {
        return i; // Equilibrium index found
      }
  
      leftSum += arr[i];
    }
  
    return -1; // No equilibrium index found
  }
  
  const arr = [-7, 1, 5, 2, -4, 3, 0];
  const equilibriumIndex = findEquilibriumIndex(arr);
  
  console.log("Equilibrium Index:", equilibriumIndex); // Output: 3
  