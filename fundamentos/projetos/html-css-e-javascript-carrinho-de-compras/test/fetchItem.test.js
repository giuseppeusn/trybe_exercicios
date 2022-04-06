require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('Verifica se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });

  it('Verifica se o fetch é chamado ao executar fetchItem', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  it('Verifica se a função fetchItem utiliza o endpoint correto', async () => {
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('Verifica se o retorno da função fetchItem está correto', async () => {
    const response = await fetchItem('MLB1615760527');
    expect(response).toEqual(item);
  });

  it('Verifica se lança o error "You must provide an url" ao chamar a função fetchItem sem argumento', async () => {
    const response = await fetchItem();
    expect(response).toEqual(new Error('You must provide an url'));
  });
});
