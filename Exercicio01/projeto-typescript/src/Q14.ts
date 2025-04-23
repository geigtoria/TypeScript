interface Pessoa {
    nome : string;
    idade: number;
    profissao: string
}

function descreverPessoa(pessoa: Pessoa): void{

    console.log(`Olá, me chamo ${pessoa.nome}, tenho ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
}

let pessoa1: Pessoa = {
    nome: "Geisa",
    idade: 21,
    profissao: "Estudante no IFRN"
}

descreverPessoa(pessoa1);