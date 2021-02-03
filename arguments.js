function getFullName(firstName, lastName) {
    console.log(arguments);
    let fullName = ' ' ;
    let thisMents = [...arguments].join(' ');
    for (let i = 0; i < arguments.length; i++) {
        const namePart = arguments[i];
        fullName = fullName + ' ' + namePart
        
    }
    return fullName;
}
const result = getFullName('minhaj', 'ahmed', 'sadik ', 'joynul', 'hifzur', 'sob');
console.log(result);


// arguments array like object //

// arguments apply array
