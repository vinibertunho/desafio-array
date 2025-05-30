let presenca = [
  "João Lima",
  "Carla Nunes",
  "Amanda Souza",
  "Bruno Ribeiro",
  "Fernanda Sales"
];

let funcionario = "Amanda Souza";

// Verifica se o funcionário está na lista de presença
if (presenca.includes(funcionario)) {
  console.log(`${funcionario} compareceu à reunião de alinhamento.`);
} else {
  console.log(`${funcionario} NÃO compareceu à reunião de alinhamento.`);
}
