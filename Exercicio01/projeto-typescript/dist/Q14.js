"use strict";
function descreverPessoa(pessoa) {
    console.log(`Olá, me chamo ${pessoa.nome}, tenho ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
}
let pessoa1 = {
    nome: "Geisa",
    idade: 21,
    profissao: "Estudante no IFRN"
};
descreverPessoa(pessoa1);
