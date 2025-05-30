
let inscritos = ["Pedro", "Larissa", "João", "Amanda", "Lucas", "Mariana"];
console.log(inscritos); // Exibe o array completo no console

// Remove o último elemento do array 'inscritos' usando o método pop()
// O elemento removido é armazenado na variável 'removendoUltimoInteressado'
let removendoUltimoInteressado = inscritos.pop();

// Exibe o array atualizado, já sem o último elemento
console.log(inscritos);

// Mostra no console qual foi o último interessado removido
console.log("o ultimo interessado removido foi:", removendoUltimoInteressado);
