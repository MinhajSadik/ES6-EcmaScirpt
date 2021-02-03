function add(num1, num2 = 10 /*backup this value when this*/ ) {
    if(num1 == undefined){ // old style to write this function default value
        nub2 = 0;
    }
    num2 = num2 || 0; // new style to write this function default value
    return num1 + num2;
}
const total = add(15);
console.log(total);