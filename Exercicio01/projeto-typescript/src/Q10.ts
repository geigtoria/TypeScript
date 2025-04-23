function calcularAreaRetangulo(largura:number, altura:number):number {
    return largura*altura;
}

const largura: number = 10;
const altura: number = 30
console.log(`Um terreno de altura ${altura} e largura ${largura} tem uma área de ${calcularAreaRetangulo(largura, altura)}`);