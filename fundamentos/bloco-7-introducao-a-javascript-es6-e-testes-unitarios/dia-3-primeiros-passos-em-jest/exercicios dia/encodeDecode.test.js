const { encode, decode } = require('./encodeDecode');

describe('Teste da função encodeDecode', () => {

  it('Verifica se é uma função', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  it('Verifica se a função encode retorna 1, 2, 3, 4 e 5', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  it('Verifica se a função decode retorna a, e, i, o, u', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  it('Verifica se substitui apenas por vogais e até o número 5', () => {
    expect(encode('aeioux')).toBe('12345x');
    expect(decode('123456')).toBe('aeiou6');
  });

  it('Verifica se tamanho da string retornada é igual ao tamanho da enviada', () => {
    expect(encode('aeioux')).toHaveLength(6);
    expect(decode('123456')).toHaveLength(6);
  });

});
