"use strict";
function ehpar(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
const numero = 35;
console.log(`O número ${numero} é par? ${ehpar(numero)}`);
