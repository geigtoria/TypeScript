type Estudante = {
    nome: string;
    notas: number[];
  };
  
  function verificarAprovacao(alunos: Estudante[]): void {
    for (const aluno of alunos) {
      const soma = aluno.notas.reduce((total, nota) => total + nota, 0);
      const media = soma / 3;
      const situacao = media >= 7 ? "Aprovado" : "Reprovado";
  
      console.log(`${aluno.nome} - Média: ${media.toFixed(2)} - Situação: ${situacao}`);
    }
  }
  
  const lista_alunos: Estudante[] = [
    { nome: "Geisa", notas: [8, 7, 9] },
    { nome: "Thiago", notas: [5, 6, 6] },
    { nome: "Talvan", notas: [9, 8, 10] },
  ];
  
  verificarAprovacao(lista_alunos);