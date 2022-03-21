const { expect } = require('@jest/globals');
const { getPokemonDetails } = require('./ex6');

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const func =  (pokemon) => pokemon.name === 'outro';
    
    function callback(error) {
      expect(error).toEqual('Não temos esse pokémon para você :(');
      done();
    }

    getPokemonDetails(func, callback);
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    // Escreva aqui seu código
  });
});