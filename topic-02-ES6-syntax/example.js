// Template literals

//A new kind string that uses backticks instead of quotes

const name ="Sam";
const greeting = `Hello, ${name}`;

console.log(greeting);

//functions as variable objects

//when you make a function, you make a value that is actually an object

function sayHi()
{
    console.log("hi");
}

sayHi();

const sayHello = function()
{
    console.log("Hello");
}

sayHello();

function greeter(greeter1, greeter2)
{
    greeter1();
    greeter2();
}
x = sayHi;

greeter(x, sayHello);

greetme = function()
{
    greeter(x, sayHello);
}

greeter(greetme, greetme);

function add(a,b){
    return a+b;
}

//arrow functions

const add = function(x,y) {return x+y}
const add = (x,y) => {x+y}

function do_something(callback) {}

do_something(function() {});
//do something then when you are done with it, call the continuation
do_somewthing(() =>function(){});

const dog = {
    name: "Fido",
    speak()
    {
        console.log(this.name)
    }
}

dog.speak()

const add4 = function(x,y) {
    console.log(this);
    return x+y;
}
console.log(add4(1,2));

function Timer()
{
    this.seconds =0;
    setInterval(() => {
        this.seconds++;
    }, 1000);
}

// arrow functions do not create a new enclosing object

// broken version because you arent incrementing the this.seconds above. 
//to solve this we can use arrow or create a closure
function Timer()
{
    this.seconds = 0; //refers to the object that was created for timer
    setInterval(function() {
        this.seconds++;
    }, 1000);
}

//closure
function Timer()
{
    this.seconds =0;
    const self = this;
    setInterval(function()
{
    self.seconds++;
}, 1000);
}

class MathTools{
    static double(x)
    {
        return x+x;
    }

    square(x)
    {
        return x*x;
    }
}

mt = MathTools();
mt.square(4);
MathTools.double(4);

//defaults values

function make_greeter(season = "Day")
{
    return function()
    {
        console.log(`Happy ${season}`);
    }
}

greeter = make_greeter("Easter");

greeter();
greeter = 1;
greeter();

// const x = 10;
// const obj = {x}; //shorthand for {x:x}
// console.log(obj);

// const x = 10;
// const obj = {x:x};

// {a, b,c,d,} vs {a:a, b:b, c:c, d:d}

const math={
     add(a,b) {return a+b} //in ES6, you can leave function out, the type of the structure(const, let, etc) define whether you can do this
}//probably not good idea

const math1 ={
    add: function(a,b) {return a+ b} //better, the function(a,b)... is the value assigned to "add"
}



