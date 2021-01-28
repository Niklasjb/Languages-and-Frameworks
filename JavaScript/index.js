//Declaring variables and objects
let num = 10;
let num2 = 2.5;
let str = "this is a string!";
let list = [3, 5, 2, "cat", "dog", true, false];

let person = {
    name: "Hans",
    age: 30,
    email: "Hans@gmail.com"
}


//Functions
function sayHi() {
    console.log("Hi!");
}

let fun1 = sayHi;

let fun2 = () => {
    console.log(str);
}


//Loops
function runLoops() {
    console.log("prints out loop counter");
    for(let i = 0; i < 4; i++) {
        console.log(i);
    }

    console.log("\nprint out object content")
    for (let elem in person) {
        console.log(person[elem]);
    }

    console.log("\nprint out list content")
    for (let elem of list) {
        console.log(elem);
    }

    while(num > 5) {
        num--;
    }
}

//Classes
class Animal {
    constructor(type, name) {
        this.type = type;
        this.name = name;
    }

    objMethod() {
        console.log(this.name);
    }
}

//Errors
function errors() {
    try {
        notAFunction();
    }catch(err) {
        console.log(err.message);
    }finally {
        console.log("this executes regardless");
    }
}
