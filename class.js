class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'aj ki school'
    }
}

const student = new Student(12, 'amina');
const student1 = new Student(13, 'tumina');
const student2 = new Student(14, 'kewna')
console.log(student.name, student1.name, student2.name );
