export interface Aluno {
    nome: string;
    matricula: number;
    ativo: boolean;
}

const aluno: Aluno = {
    nome: "Geisa",
    matricula: 20241094040013,
    ativo: true
}

console.log(aluno);