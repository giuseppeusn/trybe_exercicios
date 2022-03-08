const { searchEmployee } = require('./searchEmployee');

describe('Testa a função searchEmployee', () => {
  it('Testa se a função searchEmployee é definida', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('Testa se ao informar um ID incorreto retorna erro', () => {
    expect(() => { searchEmployee('1','firstName') }).toThrowError();
    expect(() => { searchEmployee('1','firstName') }).toThrowError(new Error('ID não identificada'));
  });

  it('Testa se ao solicitar uma informação inexistente retorna erro', () => {
    expect(() => { searchEmployee('8579-6','age') }).toThrowError('');
    expect(() => { searchEmployee('8579-6','age') }).toThrowError(new Error('Informação indisponível'));
  });

  it('Testa se a função retorna o resultado correto', () => {
    expect(searchEmployee('8579-6','firstName')).toBe('Ana');
    expect(searchEmployee('4456-4','lastName')).toBe('Zuckerberg');
    expect(searchEmployee('1256-4','specialities')).toEqual(['Hooks', 'Context API', 'Tailwind CSS']);
    expect(searchEmployee('9852-2-2','specialities')).toEqual(['Ruby', 'SQL']);
  });
});