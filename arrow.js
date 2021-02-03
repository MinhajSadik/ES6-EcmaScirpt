// function doubleIt(num){ // function declearation 
//     return num * 2;

// }

// const doubleIt = function(num){ // function expression
//     return num * 2;
// }

// Arrow Functions how to declearation 
const doubleIt = num => num * 2; // arrow function single perameter new version of ES6//
const add = (x,y) => x + y; // arrow function more then perameter in ES6
const numb5 = () => 5; // empty parameter function in arrow function//

const doMath = (x,y) => { // arrow function write multiple line system
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = doubleIt(30);
const result1 = add(23,32);
const result2 = numb5();
const result3 = doMath(7,5);
console.log (result3);