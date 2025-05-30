let ingredientes = [
  "farinha de trigo",
  "fermento",
  "leite",
  "ovos",
  "açúcar",
  "manteiga"
];

let frase = ingredientes.slice(0, -1).join(', ') + ' e ' + ingredientes.slice(-1) + '.';

console.log('Ingredientes: ' + frase);
