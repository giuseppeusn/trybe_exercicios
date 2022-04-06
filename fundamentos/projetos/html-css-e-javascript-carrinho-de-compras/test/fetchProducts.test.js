require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('Verifica se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('Verifica se o fetch foi chamado ao executar fetchProducts', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('Verifica se a função fetchProducts utiliza o endpoint correto', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('Verifica se o retorno da função fetchProducts está correto', async () => {
    const response = await fetchProducts('computador');
    expect(response).toEqual(computadorSearch);
  });

  it('Verifica se lança o error "You must provide an url" ao chamar a função fetchProducts sem argumento', async () => {
    const response = await fetchProducts();
    expect(response).toEqual(new Error('You must provide an url'));
  });
});
