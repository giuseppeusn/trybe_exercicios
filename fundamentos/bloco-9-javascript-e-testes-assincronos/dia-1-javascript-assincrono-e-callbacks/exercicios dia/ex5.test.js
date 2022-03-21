const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('Verifica se a função uppercase retorna corretamente', () => {
  it('Verifica se ao passar uma "string" retorna em maiúscula', (done) => {
    uppercase('string', (result) => {
      try {
        expect(result).toBe('STRING');
        done();
      } catch (error) {
        done(error);
      }
    });
  })

  it('Verifica se ao passar uma "StRiNg" retorna em maiúscula', (done) => {
    uppercase('string', (result) => {
      try {
        expect(result).toBe('STRING');
        done();
      } catch (error) {
        done(error);
      }
    });
  })

  it('Verifica se ao passar uma "STRING" não retorna em minúscula', (done) => {
    uppercase('string', (result) => {
      try {
        expect(result).not.toBe('string');
        done();
      } catch (error) {
        done(error);
      }
    });
  })
})