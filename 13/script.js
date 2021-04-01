'use strict';

Hamburger.SIZE_SMALL = {
    price:50,
    callories:20
};
Hamburger.SIZE_MEDIUM = {
    price:75,
    callories:30
};
Hamburger.SIZE_BIG = {
    price:100,
    callories:40
};

Hamburger.TOPPING_CHEESE = {
    price:10,
    callories:20
};
Hamburger.TOPPING_SALAD = {
    price:20,
    callories:5
};
Hamburger.TOPPING_POTATO = {
    price:15,
    callories:10
};
Hamburger.TOPPING_CONDEMENT = {
    price:15,
    callories:0
};
Hamburger.TOPPING_MAYO = {
    price:20,
    callories:5
};

const recipe =[];

function Hamburger (size){
    this.price = size.price,
    this.callories = size.callories
};

Hamburger.prototype.addTopping = function (topping){
    this.price += topping.price;
    this.callories += topping.price;
};

Hamburger.prototype.getPrice = function (){
    console.log(`Price with sauce ${this.price} tugriks`)
};

Hamburger.prototype.getCallories = function (){
    console.log(`Callories with sauce ${this.callories} kcal`)
};

const hamburger = new Hamburger(Hamburger.SIZE_BIG);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);
hamburger.getPrice();
hamburger.getCallories();


