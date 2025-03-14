const fs = require('fs');

function getMessage(hour) {
  const path = './messages.json';
  const messages = JSON.parse(fs.readFileSync(path, 'utf-8'));
  
  const mentions = "<@262002263101407233> <@365676086874603522>"
  if (messages[hour] === undefined) {
    return `${mentions}\nMVP, bora!`;
  }

  return `${mentions}\n${messages[hour]}`;
}

module.exports = getMessage;

