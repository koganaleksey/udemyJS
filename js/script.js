'use strict';

let money = prompt("Vas budget na mesyac?"),
    time = prompt("Vvedite datu  v formate YYYY-MM-DD"),
    expensesOne = prompt("Vvedite obyazatelnuyu satyu rashodov v etom mesyace"),
    expensesTwo = prompt("Vo skolko oboydyotsya?");

let appData = {
    budget: +money,
    timeData: time,
    expenses: {
        expensesOne : expensesTwo
    },
    optionalExpenses: "",
    income: [],
    savings: false,
};

alert("Budget One day: " + appData.budget / 30);