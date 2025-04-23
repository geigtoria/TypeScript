"use strict";
let contador = 0;
let soma = 0;
while (contador <= 20) {
    if (contador % 2 == 0) {
        soma = soma + contador;
    }
    contador++;
}
console.log(soma);
