let estoque = [
  { produto: "Teclado", quantidade: 5 },
  { produto: "Mouse", quantidade: 12 },
  { produto: "Monitor", quantidade: 3 },
  { produto: "Notebook", quantidade: 18 },
  { produto: "Impressora", quantidade: 9 },
  { produto: "Webcam", quantidade: 20 },
];
//usando o filter para mostrar a quantidade de cada item
let produtosParaReabastecimento = estoque.filter(
  (item) => item.quantidade > 10
);

console.log(produtosParaReabastecimento);
