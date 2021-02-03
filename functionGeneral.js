//function declaration
function addTodo(tasks) {
    const newTaskElement = document.createElement('li'); //local Variable 
}


var name = 'ahmed'; //global variable
 function addUser() {
     var firstName  = 'minhaj' //local variable  
     var lastName = 'sadik' //declear anonymous variable under function that's like a global variable
     console.log (name);
 }
 addUser();
console.log(firstName);
console.log(lastName);



//IIFE = Immediately-invoked-Function-Expressions
(function(){
    var  myName = 'minaj';
    console.log(myName);
})();


// function expression 
var myTodo = function (tasks) {

};
