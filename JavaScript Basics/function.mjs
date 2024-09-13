// function 
// Syntax of a function 

// function() {}

// function expression
// A function will not execute unless it is called. We have to call funtion to execute function code block.

// let function1 = function ram() {
//     console.log("I am function 1");
// }
// function1();

// pass a value 


// let fun1 = function(a, b, c, d) /* parameters */ {
//     console.log("I am a bad function");
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
// }
// fun1(1, 2, 3, 4) // arguments



// let add = function(a, b, c, d) {
//     let sum = a + b + c + d;
//     console.log("The value of sum is: " + sum);
// }
// add(1, 2, 3, 4)



/* let details = function(name, age, isMarried) {
    console.log(name + " is " + age + " years old and He is still " + isMarried);
}
details("Ram", 20, "single") */

/* default value */


/* let details = function(age, isMarried, name = "Shyam") {
    console.log(name + " is " + age + " years old and He is still " + isMarried);
}
details(20, "single") */

// let number = function(a, b, c, d = 11) {
//     let sum = a + b + c + d;
//     console.log(sum);
// }
// number(1, 2, 3)


// function with return

// let fun1 = function(x, y) {
//     let c = x + y;
//     return c;
// }

// let sum = fun1(1, 7);
// console.log(sum);

// let fun = function() {
//     console.log("a");
//     return 2;
// }
// let data = fun();
// console.log(data);

// arrow function
// () => {}

// let arrow = () => {
//     console.log("I am arrow Function");
// };
// arrow();


let add = (num1, num2) => {
    let num3 = num1 + num2;
    return num3; // better approach
}
let sum = add(2, 3)
console.log(sum);




// JavaScript function can only return one value