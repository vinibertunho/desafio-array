let estoque = [
  "mesa para PC",
  "cadeira gamer",
  "monitor 27 polegadas",
  "hub USB",
  "mouse sem fio"
];
 

let item = "cadeira gamer"
// Verifica se o item tem no estoque
if (estoque.includes(item)) {
  console.log(`${item} esta disponivel no estoque.`);
} else {
  console.log(`${item} não esta disponivel no estoque.`);
}
