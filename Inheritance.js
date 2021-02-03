/* 1.Inheritance 2.encapsulation 3.abstraction 4.polymorphism */



class Parent {
    constructor(){
        this.fatherName = 'Schwerzengger';
    }
}
class Child extends Parent{ // Inheritence of OOP 
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){ // This is under class to called this name method 
        return this.name + ' ' + this.fatherName;
    }
}
const baby = new Child ('Arnold');
const baby2 = new Child ('Tom');
console.log(baby.getFullName());
console.log(baby2.getFullName());

// Encapsulation
// Abstraction
// Inheritance
// Polymorphism