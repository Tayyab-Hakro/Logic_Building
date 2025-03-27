const Obj = [{
    "tayyab": "Billionaire",
    "mukho": "Bhakhree",
    "tim": "millionaire"
}];

let word = 'tim';

let found = Obj[0][word] ? `${word}: ${Obj[0][word]}` : "Not found";

console.log(found); // "tayyab: Billionaire"
