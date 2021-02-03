// let const where i'm decleard


const numbers = [12,21];
numbers[1] = 32;
console.log(numbers);


let patients = 'first man';
patients = 'fahim bai';
console.log(patients);

// let is scope variable and can't use with {curly braces}
let sum = 0;
for (let i = 0; i < 10; i++) {
  sum = sum + i;
}
console.log(sum);

//var is decleard and called outside to see this variable output
let sum = 0;
for (let i = 0; i < 10; i++) {
  sum = sum + i;
}
console.log(sum);
