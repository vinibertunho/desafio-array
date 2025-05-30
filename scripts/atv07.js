let filaAtendimento = [
  "cliente 003",
  "cliente 004",
  "cliente 005",
  "cliente 006",
  "cliente 007"
];
console.log(filaAtendimento);

let clientesAdicionados =  filaAtendimento.splice(0, 1, "cliente 001" , "cliente 002")
console.log(filaAtendimento);

