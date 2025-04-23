let contador : number = 0;
let soma: number = 0;

while (contador <= 20) {
    if (contador % 2 == 0) {
    soma = soma + contador; }
    contador++; 
}

console.log(soma);