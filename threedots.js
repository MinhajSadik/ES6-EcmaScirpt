const ages = [12,14,18,21,32,];
const ages1 = [12,13,14,15,16,17,18];
const ages2 = [12,14,15,16,17,18];
const allAges = ages.concat(ages1).concat([199]).concat(ages2);
const allAges1 = [...ages, ...ages1, ...ages2]; // concatenate multiple arrays 

// console.log(allAges);
const bussiness = 650;
const minister = 450;
const sochib = 100;
// const maximum = Math.max(bussiness, minister, sochib);
// console.log(maximum);
const takaPoisa = [650,450,250];
const maximum = Math.max(...takaPoisa); // spread operators
console.log(maximum);