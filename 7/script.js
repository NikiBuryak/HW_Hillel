// calcNumbers();

// function calcNumbers(){
//     let number = getNumber();
//     let result = getScore(number);
//     showResult(result);  
// }

// function getNumber(){
// let number;
// do {number = Number(prompt('Введите число'))}
// while(isNaN(number));
// return number;
// }

// function getScore(number){
//   return calcScore(number);
// }

// function calcScore(number){
//   if(number === 1){
//     return number;
//   }else{
//     return number + calcScore(number-1);
//   }
// }


// function showResult(text){
//     alert (`Результат вычеслений = ${text}`);
// }
calcNumbers();

function calcNumbers(){
    let number = getNumber();
    let result = getScore(number);
    showResult(result);  
}

function getNumber(){
let number;
do {number = Number(prompt('Введите число'))}
while(isNaN(number));
return number;
}

function getScore(number){
    if (number == 1) return 1;
    return number + getScore (number - 1);
}

function showResult(text){
    alert (`Результат вычеслений = ${text}`);
}