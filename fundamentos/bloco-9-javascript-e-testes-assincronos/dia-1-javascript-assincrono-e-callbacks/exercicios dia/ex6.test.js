const { getPokemonDetails } = require('./ex6');

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const func = (pokemon) => pokemon.name === 'outro';

    function callback(error) {
      expect(error).toEqual( new Error('Não temos esse pokémon para você :('));
      done();
    }

    getPokemonDetails(func, callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const string = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';
    const func = (pokemon) => pokemon.name === 'Charmander';

    function callback(err, result) {
      expect(result).toBe(string);
      done();
    }

    getPokemonDetails(func, callback);
  });
});