let diasFaltas = [
  "Carlos – Segunda",
  "Carlos – Terça",
  "Carlos – Quarta",
  "Carlos – Quinta",
  "Carlos – Sexta",
  "Carlos – Segunda (semana 2)",
  "Carlos – Terça (semana 2)",
  "Carlos – Quarta (semana 2)"
];

// Gerando relatório apenas da primeira semana, sem modificar a lista original
let primeiraSemana = diasFaltas.filter(falta => !falta.includes("semana 2"));

console.log("Relatório - Primeira semana de férias:");
primeiraSemana.forEach(item => console.log(item));