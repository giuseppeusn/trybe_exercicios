const randomNumber = () => Math.floor(Math.random() * 100);

describe('Testes exercícios 1, 2 e 3', () => {
  afterEach(() => jest.clearAllMocks());

  it('Verifica se o retorno da função "randomNumber" está correto', () => {
    const randomNumber = jest.fn().mockReturnValue(10);

    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalled()
    expect(randomNumber).toHaveBeenCalledTimes(1)
  });

  it('Verifica se o retorno da função "randomNumber" mockada (divisão) está correto', () => {
    const randomNumber = jest.fn().mockImplementation((a, b) => a / b);

    expect(randomNumber(10, 2)).toBe(5);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });

  it('Verifica se o retorno da função "randomNumber" mockada (multiplicação) está correto', () => {
    let randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(randomNumber(10, 2, 1)).toBe(20);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);

    randomNumber.mockReset();
    randomNumber = jest.fn().mockImplementation((a) => a * 2);

    expect(randomNumber(5)).toBe(10);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });
})

const toUpper = (string) => string.toUpperCase();
const firstLetter = (string) => string.split('')[0];
const oneString = (str1, str2) => str1.concat(str2);

describe('Testes exercício 4', () => {
  it('Verifica se o retorno da função "toUpper" mockada (toLower) está correto', () => {
    const toUpper = jest.fn().mockImplementation((string) => string.toLowerCase());

    expect(toUpper('TESTE')).toBe('teste');
    expect(toUpper('TeStE')).toBe('teste');
    expect(toUpper).toHaveBeenCalled();
    expect(toUpper).toHaveBeenCalledTimes(2);
  })

  it('Verifica se o retorno da função "firstLetter" mockada (última letra) está correto', () => {
    const firstLetter = jest.fn().mockImplementation((string) => string.split('')[string.length - 1]);

    expect(firstLetter('teste')).toBe('e');
    expect(firstLetter('teste')).not.toBe('t');
    expect(firstLetter).toHaveBeenCalled();
    expect(firstLetter).toHaveBeenCalledTimes(2);
  })

  it('Verifica se o retorno da função "oneString" mockada (3 params) está correto', () => {
    const oneString = jest.fn().mockImplementation((str1, str2, str3) => str1.concat(str2, str3));

    expect(oneString('teste1','teste2','teste3')).toBe('teste1teste2teste3');
    expect(oneString('teste1','teste2')).not.toBe('teste1teste2');
    expect(oneString).toHaveBeenCalled();
    expect(oneString).toHaveBeenCalledTimes(2);
  })
})