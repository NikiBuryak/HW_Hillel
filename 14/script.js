'use strict'

class Student{
    constructor(name, marks){
        this.name = name;
        this.marks = marks;
    }
    getAvarageMark(){
        return getAvarageNumber(this.marks);
    }
}

class Group{
    constructor(){
        this._students = []; 
    }
    addStudent(student){
        this._students.push(student);
    }
    getAverageMark(){
        const allMarks = this._students.flatMap(({marks}) => marks);
        return getAvarageNumber(allMarks);
    }
    
    get students(){
        return this._students ;
    }        
}

function getAvarageNumber(array){
    return array.reduce((acc, mark) => acc + mark) / array.length;
}


const feGroup = new Group();
const firstStudent = new Student('John Doe', [10, 102, 0]);

feGroup.addStudent( new Student('John Doe', [10, 10, 5, 10]));
feGroup.addStudent(new Student('Alex Smith', [10, 9, 8]));
feGroup.addStudent(new Student('Bob Johnson', [9, 10, 10, 8]));

console.log(feGroup.students);

console.log(feGroup.getAverageMark()); 