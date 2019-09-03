'use strict';

let money = +prompt("Vas budget na mesyac?", ""),
    time = prompt("Vvedite datu  v formate YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};


// Cikl for

for (let i = 0; i < 2; i++) {
    let a = prompt("Vvedite obyazatelnuyu satyu rashodov v etom mesyace", ""),
        b = prompt("Vo skolko oboydyotsya?", "");

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {

    }
}

// Cikl while
let i = 0;

// while (i < 2) {
//     let a = prompt("Vvedite obyazatelnuyu satyu rashodov v etom mesyace", ""),
//         b = prompt("Vo skolko oboydyotsya?", "");

//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
//         a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//         i++;
// }
// }

// Cikl do
// do {
//     let a = prompt("Vvedite obyazatelnuyu satyu rashodov v etom mesyace", ""),
//         b = prompt("Vo skolko oboydyotsya?", "");

//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
//         a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//         i++;
//     }
// } while (i < 2);



appData.moneyPerDay = appData.budget / 30;

alert("Budget One day: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Minimal");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Sredniy");
} else if (appData.moneyPerDay > 2000) {
    console.log("Vysokiy");
} else {
    console.log("Oshibka");
}