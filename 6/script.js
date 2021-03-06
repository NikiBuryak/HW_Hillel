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
        question:'Какой правильный ответ на главный вопрос жизни, вселенной и всего такого?',
        answer: 42,
        points: 0,
    },
    {
        question:'Какого цвета дневное безоблачное небо?',
        answer: 'Голубого',
        points: 0,
    },
    
]

takeTest(test);

function takeTest(arr){
    arr.forEach(el => ask(el));
    let result = calcResult(arr);
    alert(`You reached ${result} points`);
}

function ask(el){
    if(typeof el.answer == 'boolean'){
       if( confirm(el.question) == el.answer){
        el.points = 10;
       }
       
    }else if(el.answer == 'Голубого'){
        if(prompt(el.question, ['Желтого']) == el.answer){
            el.points = 10;
        }

    } else{
        if(prompt(el.question) == el.answer){
            el.points = 10;
        }
    }

}
function calcResult(arr){
let result = arr.map(({points}) => points);
return result.reduce((acc, el) => acc + el);

}