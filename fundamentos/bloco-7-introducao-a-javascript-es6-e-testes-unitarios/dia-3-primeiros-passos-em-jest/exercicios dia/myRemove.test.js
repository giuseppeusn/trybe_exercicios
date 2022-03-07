const myRemove = require('./myRemove');

describe('Teste da função myRemove', () => {
  const array = [1, 2, 3, 4];

  it('Verifica se o array retorna sem o 3', () => {
    expect(myRemove(array, 3)).not.toContain(3);
  });

  it('Verifica se o array retorna diferente', () => {
    expect(myRemove(array, 3)).not.toEqual(array);
  });

  it('Verifica se o array retorna sem erro', () => {
    expect(myRemove(array, 5)).toEqual(array);
  });
});