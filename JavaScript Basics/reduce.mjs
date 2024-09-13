// reduce 
// .reduce(function, initial value)
// reduce only return single value
// find the sum of all the elements in an array



let index = 0;

let list = [1, 2, 3, 4]
let data = list.reduce((previous, current, index) => {
    return previous + current;
});
console.log(data);