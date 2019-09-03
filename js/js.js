'use strict';

let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}
while (num < 55);


for (let i = 1; i < 8; i++) {
    // if (i == 6) {
    //     break;
    // }
    console.log(i);
}


let x = 5;
console.log(x++); // 6

console.log([] + false - null + true); // NaN

let y = 1;
let x = y = 2;
console.log(x); // 2

console.log([] + 1 + 2); // 12

console.log("1" [0]); // 1

console.log(2 && 1 && null && 0 && undefined); // null

let a = true
console.log(!!a); // true

console.log(null || 2 && 3 || 4);


let a = [1, 2, 3],
    b = [1, 2, 3];

if (a == b) {
    console.log("Verno!");
} else {
    console.log("Neverno!");
} // Neverno

console.log(+"Infinity"); // NaN

console.log("ezhik" > "yabloko"); // false

console.log(0 || "" || 2 || undefined || true || false);


