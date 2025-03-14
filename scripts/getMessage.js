const fs = require('fs');

function getMessage(hour) {
  const path = './messages.json';
  defaultMentions = '<@262002263101407233> <@365676086874603522>\n';
  defaultMessage = defaultMentions + 'MVP, bora!';
  
  if (hour === undefined) {
    return defaultMessage + ' (hora não informada)';
  }


  if (!fs.existsSync(path)) {
    return defaultMessage + ' (arquivo não encontrado)';
  }

  const rawData = fs.readFileSync(path, 'utf-8');

  let messages;
  try {
    messages = JSON.parse(rawData);
  } catch (error) {
    return defaultMessage + ' (erro ao fazer parse do JSON)';
  }

  const mentions = "<@262002263101407233> <@365676086874603522>";
  if (messages[hour] === undefined) {
    return defaultMessage + ' (mensagem não encontrada)';
  }
  
  return `${mentions}\n${messages[hour]}`;
}

module.exports = getMessage;
