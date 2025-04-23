import {Aluno} from './Q8';

const alunos: Aluno[] = [
    { nome: "Thiago", matricula: 123456, ativo: true },
    { nome: "Talvan", matricula: 333333, ativo: false },
    { nome: "Lucas", matricula: 998765, ativo: true },
    { nome: "João Vicente", matricula: 101010, ativo: false }
];

for(let i = 0; i < alunos.length; i++){
    if(alunos[i].ativo){
        console.log(`${alunos[i].nome} está ativo! `);
    }
}