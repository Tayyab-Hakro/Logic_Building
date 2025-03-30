/**
 * @param {string[][]} students
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
function countMatchingStudents(students, ruleKey, ruleValue) {
    const ruleIndex = { "name": 0, "grade": 1, "section": 2 };

    let index = ruleIndex[ruleKey];
    console.log(index + "is index")

    return students.filter(student => student[index] === ruleValue).length;
}

// Test cases
const students = [
    ["Alice", "10", "A"],
    ["Bob", "9", "B"],
    ["Charlie", "10", "A"],
    ["David", "9", "A"]
];

console.log(countMatchingStudents(students, "grade", "10"));   // Output: 2
console.log(countMatchingStudents(students, "section", "A"));  // Output: 3
console.log(countMatchingStudents(students, "name", "Bob"));   // Output: 1
