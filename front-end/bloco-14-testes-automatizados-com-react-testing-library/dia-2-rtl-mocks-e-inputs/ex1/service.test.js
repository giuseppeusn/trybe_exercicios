const randomNumber = () => Math.floor(Math.random() * 100);

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