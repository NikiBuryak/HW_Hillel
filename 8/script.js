// function createLogger (name) {
//     function log(str){
//         console.log(formText(str));
//     }

//     function warn (str){
//         console.warn(formText(str));
//     }

//     function formText (str){
//         return (`[${name}]: ${str}`);
//     }

//     return{log, warn,}
// }

// let vasyaLogger = createLogger(`Vasya`);
// vasyaLogger.log(`jopa`);

// let todosLoger = createLogger(`todos`);
// todosLoger.warn(`jopa`);


// function add(a){
//     return function (b) {
//             return a + b;
//         }
    
// }

// let addiction10 = add(10);
// console.log(addiction10(20));

function createCalculator (a) {

    function sum (b) {
        if (!isNaN(b)){
        return a = a + b};
        return null;
    }
    function mult(b) {
        if (!isNaN(b)){
            return a = a * b};
            return null;
    }
    function sub(b) {
        if (!isNaN(b)){
            return a = a - b};
            return null;
    }
    function div(b) {
        if (!isNaN(b)){
            return a = a / b};
            return null;
    }
    function set(b) {
        if (!isNaN(b)){
            return a = b};
            return null;
    }
    return{
        sum,
        mult,
        sub,
        div,
        set,
    }
}

const calc = createCalculator(10);



// function isValid(b) {
//     if(!isNaN(b)){
//         return b;
//     // } (sum() = null, mult() = null,div() = null, sub() = null, set() = null);
//     }(b, a = null);
// }


