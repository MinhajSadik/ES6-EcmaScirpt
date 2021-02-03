//how to destructure of object or array
// property and value destructure in variable.
//Object destructure
const person = {
    name: 'jack william',
    age: 23,
    job: 'facebook',
    gfName: 'ami jack',
    address: 'amader gram',
    friends: ['tom hanker', 'ami nai', 'tumi takbay kila'],
    phone: 9090909
};

const {phone} = person;


// const gfName = person.gfName;
// const pHone = person.phone;

// console.log(gfName, phone, address, selary);
// console.log(gfName, phone, address, selary);

//Array destructure
const friends = 
['sakib khan', 
'amir khan', 
'salman khan', 
'rahim khan', 
'sob khan'];
const [chotoFriend, nextFriend, ...allKhan] = friends;
console.log(chotoFriend, nextFriend, allKhan);

//Complex Object destructure
const complexObject = {
    name: 'abcd',
    info: {
        address: 'kolabagan',
        leader: 'kalibagan bazar'
    }
}

const {leader} = complexObject.info;
console.log(leader);