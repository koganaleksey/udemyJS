'use strict';

//Variables

var leftBorderWidth = 1;
let second = 2;
const pi = 3.14;

console.log(second);


//Types

var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log('string'*9);

let something;
console.log(something);

let persone = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(persone["name"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

console.log(arr[0]);


//Obsheniye s polzovatelem

// alert("Hello World!");
// confirm("Are you here?");

// let answer = confirm("Are you here?");

// console.log(answer);

// let answer = +prompt("Are you 18?", "Yes");

// console.log(typeof(answer));


//Operators

// console.log("arr" + " - object");
// console.log(4 + " - object");


let incr = 10,
    decr = 10;
console.log(++incr, --decr);

console.log(5%2); // ostatok deleniya

console.log("2" === 2); // ravenstvo

let isChecked = true,
    isClose = true;

    console.log(isChecked && isClose); //I
    console.log(isChecked || isClose); //ILI