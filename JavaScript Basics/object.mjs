// Array is a collection of value whereas object is a collection of any value pairs . key value pairs are called properties

// let info = {
//     name: "Rohan",
//     location: "Chabahil"
// };
// console.log(info.location);



// let infro = {
//     name: "Ram",
//     age: 30,
//     isMarried: true,
//     location: "KTm"
// };

// // get value
// console.log(infro.age);
// console.log(infro.isMarried);

// // change value
// infro.age = 50;
// infro.isMarried = false;
// infro.name = "Samir Chor";
// infro.location = "Gokarneshwor";

// // delete value

// delete infro.name;
// delete infro.isMarried;

// console.log(infro.name);


// Duplicate key doesn't exit in objects, if it is exist it is ovveride or replaced by last key value.

// let infro = {
//     name: "Ram",
//     age: 30,
//     isMarried: true,
//     location: "KTm",
//     name: "Rohan"
// };
// console.log(infro.name);




// let info = {
//     name: "Rohan",
//     age: 22,
//     favFruits: ["Apple", "Mango", "Orange"],
//     location: {
//         province: "Bagmati",
//         city: "Kathmandu",
//         country: "Nepal"
//     },
//     age: () => {
//         console.log("I am ram");
//     }
// };


// console.log(info.name);
// console.log(info.favFruits[0]);
// console.log(info.location.province);



// let list = ['rohan', 'rohans', 'sanket', 'sushank', 'amreet', 'virat', 'rohit']
// let list1 = list.sort();
// console.log(list1);


// convert object into array


// let info = {
//     name: "Rohan",
//     location: "Chabahil"
// };


// keys if we need

// let opt = Object.keys(info)
// console.log(opt);

// values if we needed 


// let opt = Object.values(info)
// console.log(opt);


// let opt = Object.entries(info)
// console.log(opt);

// convert array into object

/* let data = [
    ['name', 'Rohan'],
    ['location', 'Chabahil']
];

let opt = Object.fromEntries(data);
console.log(opt); */


// let data = Math.random();
// console.log(data);

// let data1 = Math.random() * 100;
// console.log(data1);

// let data2 = Math.ceil(55.1);
// console.log(data2);

// let data3 = Math.floor(55.9);
// console.log(data3);

// let data4 = Math.round(55.4);
// console.log(data4);