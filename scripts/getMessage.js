const fs = require('fs');

function getMessage(hour) {
  const path = './messages.json';
  const defaultMentions = "<\@262002263101407233> <\@365676086874603522>\\n";
  const defaultMessage = defaultMentions + 'MVP, bora!';

  if (!hour) {
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

  if (!messages[hour]) {
    return defaultMessage + ' (mensagem não encontrada)';
  }

  return `${defaultMentions}${messages[hour]}`;
}

module.exports = getMessage;