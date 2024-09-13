let productss = [{
        name: " mobile",
        price: 5000
    },

    {
        name: "tv",
        price: 10000
    },

    {
        name: "heater",
        price: 7000
    }
];

// let data = productss.map((value, index) => {
//     return value.price;
// })

// console.log(data);

// [5000, 10000, 7000] ✅






/* ----------------------------------------------------------------------- */

/* let data = productss.map((value, index) => {
    return value.price;
})

.reduce((previous, current) => {
    return previous + current;
}, 0);

console.log(data); */

// 22000 ✅





/* ----------------------------------------------------------------------- */

/* let data = Object.entries(productss[0]);
// console.log(data);

let data1 = data.map((value, index) => {
        return value[1];
    })
    // console.log(data1);

let opt = Object.values(data1);
console.log(opt);

console.log(opt[0] + " : " + opt[1]); */

// [ ' mobile', 5000 ]  ✅





/* ----------------------------------------------------------------------- */

/* let data = Object.entries(productss[1]);
// console.log(data);

let data1 = data.map((value, index) => {
    return value[1];
})
// console.log(data1);

let opt = Object.values(data1);
// console.log(opt);

console.log(opt[0] + " : " + opt[1]); */

// tv : 10000  ✅



/* ----------------------------------------------------------------------- */

/* let data = Object.entries(productss[2]);
// console.log(data);

let data1 = data.map((value, index) => {
    return value[1];
})
// console.log(data1);

let opt = Object.values(data1);
// console.log(opt);

console.log(opt[0] + " : " + opt[1]); */

// heater : 7000 ✅