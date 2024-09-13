// JSON = JavaScript Object Notation 



let info = {
    name: "Rohan",
    age: 22,
    isMarried: "single"
};

let opt = JSON.stringify(info);

// Converts a js value to a JSON 



console.log(opt);


// {"name":"Rohan","age":22,"isMarried":"single"}