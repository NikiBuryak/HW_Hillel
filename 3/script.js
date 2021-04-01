const sign = getSign()

const firstNumb = askNumber('One');
const secondNumb = askNumber('Two');
const result = calculate(sign, firstNumb, secondNumb);
showresult (firstNumb, sign, secondNumb, result);


function calculate(operat, operOne, operTwo){
    let result;
    switch(operat){
        case '+':   result = operOne + operTwo; break
        case '-':   result = operOne - operTwo; break
        case '*':   result = operOne * operTwo; break
        case '/':   result = operOne / operTwo; break
        default: alert('Something gone wrong...')
        }
    return result;
}   
function askNumber(numbName){
    do {inpNumb = Number(prompt('Enter the number' + numbName))}
    while (isNaN(inpNumb));
    return inpNumb;
}
function getSign(){
    do{inpSign = prompt('Enter the sign: +, -, *, /')}
    while ((inpSign !== '+') && (inpSign !== '-') && (inpSign !== '*') && (inpSign !== '/'));
    return inpSign;
}
function showresult (operOne, operat, operTwo, res){
    alert(`${operOne} ${operat} ${operTwo} = ${res}`);
}

