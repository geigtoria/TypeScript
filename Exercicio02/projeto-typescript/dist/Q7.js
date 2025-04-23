"use strict";
let aluno1 = {
    nome: "Geisa",
    nota1: 8,
    nota2: 9,
    nota3: 10,
    frequencia: 75
};
function calcularMedia(aluno) {
    const media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;
    aluno.media = media;
    return media;
}
function calcularFrequencia(aluno) {
    return aluno.frequencia >= 75 ? "Aprovado" : "Reprovado";
}
function descreverAluno(aluno) {
    const media = calcularMedia(aluno);
    const status = calcularFrequencia(aluno);
    console.log(`Nome: ${aluno.nome}`);
    console.log(`Nota 1: ${aluno.nota1}`);
    console.log(`Nota 2: ${aluno.nota2}`);
    console.log(`Nota 3: ${aluno.nota3}`);
    console.log(`Frequência: ${aluno.frequencia}%`);
    console.log(`Média: ${media.toFixed(2)}`);
    console.log(`Status: ${status}`);
}
descreverAluno(aluno1);
