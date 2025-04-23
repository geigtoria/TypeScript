let notas: number[] = [10, 3, 8];
let soma = 0;
for (let nota of notas) {
  soma = soma + nota;
}
let media = soma / 3;
console.log(`Média: ${media}`);