const sum = require('./sum');

describe('Teste da função sum', () => {
  it('Verifica se 4 + 5 é igual a 9', () => {
    expect(sum(4,5)).toBe(9);
  });

  it('Verifica se 0 + 0 é igual a 0', () => {
    expect(sum(0,0)).toBe(0);
  });

  it('Verifica se retorna erro ao passar parâmetros string', () => {
    expect(() => { sum(4,'5') }).toThrowError();
  });

  it('Verifica se retorna mensagem de erro correta', () => {
    expect(() => { sum(4,'5') }).toThrowError(new Error('parameters must be numbers'));
  });
});