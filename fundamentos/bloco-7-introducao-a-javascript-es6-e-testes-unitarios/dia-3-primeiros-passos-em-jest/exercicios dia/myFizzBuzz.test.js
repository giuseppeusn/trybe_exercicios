const myFizzBuzz = require('./myFizzBuzz');

describe('Teste da função myFizzBuzz', () => {

  it('Verifica se a função retorna "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Verifica se a função retorna "fizz"', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });

  it('Verifica se a função retorna "buzz"', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });

  it('Verifica se a função retorna o número', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });

  it('Verifica se a função retorna "false"', () => {
    expect(myFizzBuzz('teste')).toBe(false);
  });
});