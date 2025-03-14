const getMessage = require('./getMessage');
const fs = require('fs');

describe('getMessage', () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	test('returns a default message when hour is not in messages', () => {
		const result = getMessage("11");
		expect(result).toBe('<@262002263101407233> <@365676086874603522>\nMVP, bora! (mensagem não encontrada)');
	});

	test('returns a specific message when hour is in messages', () => {
		const result = getMessage("10");
		expect(result).toBe('<@262002263101407233> <@365676086874603522>\nSegunda wave de MVP iniciando! Vamos com tudo!');
	});

	test('reads messages from the correct file path', () => {
		const spy = jest.spyOn(fs, 'readFileSync');
		getMessage(10);
		expect(spy).toHaveBeenCalledWith('./messages.json', 'utf-8');
		spy.mockRestore();
	});
});
