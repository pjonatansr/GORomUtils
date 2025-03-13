const fs = require('fs');

function getMessage(hour) {
  const path = './messages.json'; // Caminho para o arquivo messages.json na raiz
  const messages = JSON.parse(fs.readFileSync(path, 'utf-8'));

  // Se houver uma mensagem para a hora atual, retorna ela, senão, retorna uma mensagem padrão
  return messages[hour] || 'MVP, bora!';
}

// Para uso no GitHub Action
const currentTime = process.env.time;
console.log(getMessage(currentTime)); // Imprime a mensagem para o GitHub Action
