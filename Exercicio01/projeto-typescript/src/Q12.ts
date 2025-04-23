function identificador(num: string | number): string {
    if (typeof num === "string") {
        return `${num} é uma string`;
    } else {
        return `${num} é um number`;
    }
}

const num1: string = "10";
const num2: number = 35;

console.log(identificador(num1));
console.log(identificador(num2));
