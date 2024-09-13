// Array => []
// map
// use map method if both input and output are arrays and both input and output's length are same.


// let list = ["a", "b", "c"];
// let opt = list.map((value, index) => {

//     return `${index} =  ${value}`;
// });

// console.log(opt);


// let list = ["a", "b", "c"];
// let opt = list.map((value, index) => {
//     console.log("Rohan", "Shyam", "Hari");
//     return `${index} =  ${value}`;
// });

// console.log(opt);

// let list = [1, 2, 3, 4]
// let output = list.map((value, index) => {
//     return value * 2;
// })
// console.log(output);

// let list = ["my", "name", "is"]

// let data = list.map((value, index) => {
//     return value.toUpperCase();
// })
// console.log(data);


// let list = [1, 2, 3, 4]

// let data = list.map((value, index) => {
//     return value * 100;
// })

// console.log(data);

// let list = [1, 3, 4, 5]
// let data = list.map((value, index) => {

//     if (value % 2 !== 0) {
//         return value * 100;
//     } else {
//         return value * 0;
//     }
// })

// console.log(data);

// let list = ["r", "o", "h", "a", "n"]
// let data = list.map((value, index) => {

//     if (index == [0]) {
//         return value.toUpperCase();
//     } else {
//         return value.toLowerCase();
//     }

// })

// console.log(data);



/* let list = ["r", "o", "h", "a", "n"];
let data = list.map((value, index) => {
    while (index < list.length) {
        return value + "a";
        // return value.concat("a");
    }
})
console.log(data)
 */


// includes 
/* let l11 = ["rohan", "sanket", "rohan", "sushank"];
let l22 = l11.includes("rohan");
console.log(l22); */


// Reverse

/* let l1 = ["rohan", "sanket", "rohan", "sushank"];
let l2 = l1.reverse();
console.log(l2); */

// push,pop,unshift,shift

/* 
let arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.pop();
arr.unshift("Sanket")
arr.shift();
console.log(arr); */


// Sort

// soritng a string

// let list = ['rohan', 'rohans', 'sanket', 'sushank', 'amreet', 'virat', 'rohit']
// let list1 = list.sort();
// console.log(list1);

// sorting a number

// let list = [1, 5, 6.4, 64, 33, 22, 43, 75, 745, 645, 332]
// let list = ["a", "b", "c", "d", "e"]
// let list1 = list.sort((a, b) => {
//     return a - b;
// })
// console.log(list1);




// let data = list.slice(2, 4);
// console.log(data);


// Write a program to sum the even of the array

// let list = [1, 2, 3, 4]

// let data = list.filter((value, index) => {
//     if (value % 2 === 0) {
//         return value;
//     }
// })

// let d2 = data.reduce((previous, current) => {
//     return previous + current;
// }, 0)
// console.log(d2);