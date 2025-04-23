let linguagem: number = 10;
let nome_linguagem: string;

switch (linguagem) {
    case 1:
        nome_linguagem = "TypeScript";
        break;
    case 2:
        nome_linguagem = "JavaScript";
        break;
    case 3:
        nome_linguagem = "Python";
        break;
    default:
        nome_linguagem = "Linguagem não cadastrada";
}

console.log(nome_linguagem);