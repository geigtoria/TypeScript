interface Produto {
    nome: string;
    emEstoque: boolean;
  }
  
  function filtrarProdutosDisponiveis(produtos: Produto[]): Produto[] {
    return produtos.filter(produto => produto.emEstoque);
  }
  
  const lista_produtos: Produto[] = [
    { nome: "Pipoca", emEstoque: true },
    { nome: "Bala", emEstoque: false },
    { nome: "Chocolate", emEstoque: true },
  ];
  
  const Disponiveis = filtrarProdutosDisponiveis(lista_produtos);
  console.log(Disponiveis);