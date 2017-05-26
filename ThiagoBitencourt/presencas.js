'use strict';

const presenca = [
  {
    aula: "04/05/2017",
    alunosPresentes: [
      { aluno: "Alexandro", aulas: 4 },
      { aluno: "Jivago", aulas: 4 },
      { aluno: "Fernando", aulas: 4 },
      { aluno: "Christopher", aulas: 4 },
      { aluno: "Matheus", aulas: 4 },
      { aluno: "Mateus", aulas: 4 },
      { aluno: "Leandro", aulas: 4 },
      { aluno: "Eleani", aulas: 4 },
      { aluno: "Willian", aulas: 4 },
      { aluno: "Diogo", aulas: 4 },
      { aluno: "Djovani", aulas: 4 },
      { aluno: "Lucas", aulas: 1 }
    ]
  },
  {
    aula: "11/05/2017",
    alunosPresentes: [
      { aluno: "Lucas", aulas: 4 },
      { aluno: "Matheus", aulas: 4 },
      { aluno: "Christopher", aulas: 4 },
      { aluno: "Jivago", aulas: 4 },
      { aluno: "Fernando", aulas: 4 },
      { aluno: "Leandro", aulas: 4 },
      { aluno: "Herykson", aulas: 4 },
      { aluno: "Thales", aulas: 4 },
      { aluno: "Willyan", aulas: 4 },
      { aluno: "Mateus", aulas: 4 },
      { aluno: "Djovani", aulas: 3 },
      { aluno: "Alexandro", aulas: 1 }
    ]
  },
  {
    aula: "18/05/2017",
    alunosPresentes: [
      { aluno: "Alexandro", aulas: 4 },
      { aluno: "Jivago", aulas: 4 },
      { aluno: "Fernando", aulas: 4 },
      { aluno: "Christopher", aulas: 4 },
      { aluno: "Matheus", aulas: 4 },
      { aluno: "Mateus", aulas: 4 },
      { aluno: "Leandro", aulas: 4 },
      { aluno: "Herykson", aulas: 4 },
      { aluno: "Thales", aulas: 0 },
      { aluno: "Eleani", aulas: 4 },
      { aluno: "Willian", aulas: 4 },
      { aluno: "Diogo", aulas: 0 },
      { aluno: "Djovani", aulas: 4 },
      { aluno: "Lucas", aulas: 4 }
    ]
  },
  {
    aula: "25/05/2017",
    alunosPresentes: [
      { aluno: "Alexandro", aulas: 4 },
      { aluno: "Jivago", aulas: 4 },
      { aluno: "Fernando", aulas: 4 },
      { aluno: "Christopher", aulas: 0 },
      { aluno: "Matheus", aulas: 4 },
      { aluno: "Mateus", aulas: 4 },
      { aluno: "Leandro", aulas: 4 },
      { aluno: "Thales", aulas: 0 },
      { aluno: "Eleani", aulas: 4 },
      { aluno: "Willian", aulas: 4 },
      { aluno: "Diogo", aulas: 0 },
      { aluno: "Djovani", aulas: 4 },
      { aluno: "Lucas", aulas: 4 }
    ]
  }
];


function mostraPresenca() {
  presenca.forEach(aula => {
    console.log("aula: ", aula.aula);
    console.log("alunos presentes: ", aula.alunosPresentes.length);
  });
}

mostraPresenca();
