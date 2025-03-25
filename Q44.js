/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    // Split the date string into year, month, and day
    let [year, month, day] = date.split('-');
    console.log(date + 'is')

    // Convert each part to binary without leading zeros
    let binaryYear = parseInt(year, 10).toString(2);
    let binaryMonth = parseInt(month, 10).toString(2);
    let binaryDay = parseInt(day, 10).toString(2);

    // Return the final binary representation
    return `${binaryYear}-${binaryMonth}-${binaryDay}`;
};

// Example Test Cases
console.log(convertDateToBinary("2080-02-29")); // Output: "100000100000-10-11101"
console.log(convertDateToBinary("1900-01-01")); // Output: "11101101100-1-1"
