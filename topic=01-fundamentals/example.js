console.log("Hello");

function testScope()
{
    var x= 1;
    if (true) {
        let x = 2;
        console.log(x);
    }
    console.log(x);
}

testScope();

console.log("----")
//closures
function makeIncrementor(k) {
    let n = k; //<-- forms the closure. 
    return function(x) {
        return x + n;
    }
}

myDoubler = makeIncrementor(5);
console.log(myDoubler(4));

function makeCounter()
{
    let count = 0;
    return function() {
        count ++;
        return count;
    }
}

const counter = makeCounter();
const counter2 = makeCounter();
console.log(counter());
console.log(counter2());
console.log(counter());
console.log(counter2());
console.log(counter());
console.log(counter2());

//closure maintain the state and refer to that state every time it is invoked again. 


//let does not allow re-declaration
//const cant be re-assigned

function x()
{
    myDoubler = makeIncrementor(4) // <== steps on global variable
// adding const fixes it
}

//utils.js:
function add(x,y){
    return x+ y;
}
///how to import util.js to main.js?
//The old way is inside the <script> tag in which the first one would be imported first
// <script src = "util.js"> would be imported first and available to second script
// other method is by using "Require" in node
// main.js:
// z = add(3,4)

// <html>
//     <body>
//         <script src="utils.js"></script>
//     </body>
// </html>

// //in main.js for the seoncd method
// //problem it does not exist in browser only in node


// const { add } = require("./utils.js")
// const utils = require("./utils.js") old system referred as common js

// ----- new way ---
//util.js:

export function add(x,y) {
    return x + y;
}

//in main.js

import{ add } from "./utils.js"
console.log(add(3,4))

// package.json which is inside the directory
// what it says is the project name, but what we want is 
// "type":"module" it has to exist to use

// <html>
//     <body>
//         <script type="module" src="utils.js"></script> we need type = module for browser script module tag which would allow us to use export and importing
//     </body>
// </html>

