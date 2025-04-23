"use strict";
function filtrarProdutosDisponiveis(produtos) {
    return produtos.filter(produto => produto.emEstoque);
}
const lista_produtos = [
    { nome: "Pipoca", emEstoque: true },
    { nome: "Bala", emEstoque: false },
    { nome: "Chocolate", emEstoque: true },
];
const Disponiveis = filtrarProdutosDisponiveis(lista_produtos);
console.log(Disponiveis);
