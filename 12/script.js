function Counter(number){
    this.base = number;
    this.add = function(number){
        this.base += number;
    }
    this.sub = function(number){
        this.base -= number;
    }
    this.mult = function(number){
        this.base *= number;
    }
    this.div = function (number){
        this.base /= number;
    }
    this.set= function (number){
        this.base = number;
    }
    this.get = function(){
        console.log(this.base);
    } 
}

const calc = new Counter(10);
console.log(calc.base)

calc.add(5);
console.log(calc.base);
calc.add(5);
console.log(calc.base);
calc.mult(3);
console.log(calc.base);
calc.set(100);
console.log(calc.base);
calc.add(5);
console.log(calc.base);
calc.get();

console.log(`Your number is ${calc.base}`);