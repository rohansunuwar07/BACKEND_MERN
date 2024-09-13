let data = () => {
    console.log("b");
}

let data1 = () => {
    console.log("a");
}

let data2 = () => {
    console.log("c");
}

data(data1(), data2());



// A Callback function is a function passed into another function as arguments

// high order function: A function which takes argument as function. A function which return another function is called high order function