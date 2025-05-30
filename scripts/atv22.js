let alunos = [
    { nome: "Carlos", media: 6.5 },
    { nome: "Fernanda", media: 7.2 },
    { nome: "Lucas", media: 8.1 },
    { nome: "Marina", media: 5.9 },
    { nome: "João", media: 7.0 },
    { nome: "Aline", media: 9.3 }
  ];
  //usei o filter e o map para msotrar os alun os que passaram de ano
  let alunosRecuperacaoFinal = alunos
    .filter(aluno => aluno.media >= 7)
    .map(aluno => aluno.nome);
  
  console.log("Alunos que podem ir direto para a recuperação final:");
  console.log(alunosRecuperacaoFinal.join(', '));