const service = require('./service');

describe('Testes exercícios 1, 2 e 3', () => {
  afterEach(() => jest.clearAllMocks());

  it('Verifica se o retorno da função "randomNumber" está correto', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);

    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled()
    expect(service.randomNumber).toHaveBeenCalledTimes(1)
  });

  it('Verifica se o retorno da função "randomNumber" mockada (divisão) está correto', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b) => a / b);

    expect(service.randomNumber(10, 2)).toBe(5);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  it('Verifica se o retorno da função "randomNumber" mockada (multiplicação) está correto', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(service.randomNumber(10, 2, 1)).toBe(20);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);

    service.randomNumber.mockReset();
    service.randomNumber = jest.fn().mockImplementation((a) => a * 2);

    expect(service.randomNumber(5)).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });
})



describe('Testes exercício 4', () => {
  it('Verifica se o retorno da função "toUpper" mockada (toLower) está correto', () => {
    service.toUpper = jest.fn().mockImplementation((string) => string.toLowerCase());

    expect(service.toUpper('TESTE')).toBe('teste');
    expect(service.toUpper('TeStE')).toBe('teste');
    expect(service.toUpper).toHaveBeenCalled();
    expect(service.toUpper).toHaveBeenCalledTimes(2);
  })

  it('Verifica se o retorno da função "firstLetter" mockada (última letra) está correto', () => {
    service.firstLetter = jest.fn().mockImplementation((string) => string.split('')[string.length - 1]);

    expect(service.firstLetter('teste')).toBe('e');
    expect(service.firstLetter('teste')).not.toBe('t');
    expect(service.firstLetter).toHaveBeenCalled();
    expect(service.firstLetter).toHaveBeenCalledTimes(2);
  })

  it('Verifica se o retorno da função "oneString" mockada (3 params) está correto', () => {
    service.oneString = jest.fn().mockImplementation((str1, str2, str3) => str1.concat(str2, str3));

    expect(service.oneString('teste1','teste2','teste3')).toBe('teste1teste2teste3');
    expect(service.oneString('teste1','teste2')).not.toBe('teste1teste2');
    expect(service.oneString).toHaveBeenCalled();
    expect(service.oneString).toHaveBeenCalledTimes(2);
  })
})

describe('Teste exercício 5', () => {
  service.dogApi = jest.fn();
  afterEach(() => service.dogApi.mockReset());

  it('Verifica se o retorno da API está correto', async () => {
    service.dogApi.mockResolvedValue('request sucess');
    service.dogApi();

    expect(service.dogApi).toHaveBeenCalled();
    expect(service.dogApi).toHaveBeenCalledTimes(1);
    await expect(service.dogApi()).resolves.toBe('request sucess');
    expect(service.dogApi).toHaveBeenCalledTimes(2);
  })

  it('Verifica se o retorno da API falha', async () => {
    service.dogApi.mockResolvedValue('request failure');
    service.dogApi();

    expect(service.dogApi).toHaveBeenCalled();
    expect(service.dogApi).toHaveBeenCalledTimes(1);
    await expect(service.dogApi()).resolves.toBe('request failure');
    expect(service.dogApi).toHaveBeenCalledTimes(2);
  })
})