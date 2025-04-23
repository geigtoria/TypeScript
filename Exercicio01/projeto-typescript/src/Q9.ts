function ehpar(num: number): boolean {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

const numero: number = 35;
console.log(`O número ${numero} é par? ${ehpar(numero)}`);
