"use strict";
function identificador(num) {
    if (typeof num === "string") {
        return `${num} é uma string`;
    }
    else {
        return `${num} é um number`;
    }
}
const num1 = "10";
const num2 = 35;
console.log(identificador(num1));
console.log(identificador(num2));
