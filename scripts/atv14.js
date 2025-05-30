let artigosBlog = [
    "Como usar Docker com Node.js",
    "5 erros comuns em JavaScript",
    "Introdução ao TypeScript",
    "Clean Code na prática",
    "Design Patterns úteis",
    "Refatoração de código",
    "Boas práticas de API REST",
    "Segurança em aplicações web"
  ];
  
  // Usando slice para criar uma nova lista com os 4 primeiros artigos
  let artigosRecentes = artigosBlog.slice(0, 4);
  
  console.log(artigosRecentes);