const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  it('Verifica se ao executar a função saveCartItems chama localStorage.setItem', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('Verifica se ao executar a função saveCartItems chama localStorage.setItem com dois parâmetros', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
    // expect(localStorage.setItem).toHaveBeenCalledWith('<ol><li>Item</li></ol>');
  });
});
