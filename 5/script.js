const test = [
    {
        question:'Сколько будет 2+2?',
        answer: 4,
        points: 0,
    },
    {
        question:'Солнце встает на востоке?',
        answer: true,
        points: 0,
    },
    {
        question:'Сколько будет 5 / 0?',
        answer: 0,
        points: 0,
    },
    {
        question:'Как правильный ответ на главный вопрос жизни, вселенной и всего такого.',
        answer: 42,
        points: 0,
    },
    {
        question:'Какого цвета дневное безоблачное небо?',
        answer: 'Голубого',
        points: 0
    }
]

takeTest();

function takeTest(){
    test.forEach(el => ask(el));
}

function ask(el){
    if(typeof el.answer == 'boolean'){
       if( confirm(el.question) == el.answer){
        points = 10;
       }
       
    } else{
        if(prompt(el.question) == el.answer){
            points = 10;
    };

    
}


averageStudentMark(13); 

averageGroupMark(students);


function averageStudentMark(id){ 
    let student = findStudent(id);
    let avgMark = takeAvgMark(student.marks);
    console.log(avgMark);
}

function takeAvgMark(array){
    let result = array.reduce((acc, el) => acc + el)/ array.length;
    return result;
}
function findStudent(id){
    let numb = id;
    let student= students.find(({id}) => id == numb);
    // console.log(student);
    return student;
}

function averageGroupMark(array) {
    const marks = array.map(({marks}) => marks).flat();
    let avgGroupMark = takeAvgMark(marks); console.log(avgGroupMark);
    return avgGroupMark;
  }