const { createMenu } = require('../src/restaurant');
 
/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. Eles guiarão você pelo desenvolvimento.

  Parâmetros:
  - Um objeto. Exemplos: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.
  Comportamento:

  const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).

  meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

  meuRestaurante.order('coxinha') // Retorno: undefined

  meuRestaurante.consumption // Retorno: ['coxinha']

  meuRestaurante.pay() // Retorno: 3.9

  Uma função createMenu retorna um objeto com as seguintes características:
  - Uma chave `fetchMenu` retorna o objeto que a função `createMenu` recebe por parâmetro. O menu tem sempre duas chaves, `food` e `drink`, no seguinte formato:

  const meuRestaurante = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
  });

  meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` que contém um array de strings, com cada string sendo a chave de um pedido. Por exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` que tem uma função que, recebida uma string como parâmetro, adiciona essa string à lista salva em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função que soma o valor de todos os pedidos e dá o preço com acréscimo de 10%.

  IMPORTANTE: FAÇA OS TESTES E PASSOS DE ACORDO COM A ORDEM INDICADA!

*/

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  const objetoRetornado = createMenu({ food: {'coxinha': 3.9, 'pizza': 2.4, 'sanduiche': 1.2}, drink: {'coke': 3, 'agua': 2.5} });

  it('Verifica se a função retorna um objeto que possui chave fetchMenu', () => {

    expect(objetoRetornado).toHaveProperty('fetchMenu');
  });

  it('Verifica se a função retorna um objeto com as chaves "food" e "drink"', () => {

    expect(objetoRetornado.fetchMenu()).toHaveProperty('food');
    expect(objetoRetornado.fetchMenu()).toHaveProperty('drink');
  });
  
  it('Verifica se o menu passado pra função "createMenu" é identico ao menu recuperado em "fetchMenu"', () => {

    expect(objetoRetornado.fetchMenu()).toEqual({ food: {'coxinha': 3.9, 'pizza': 2.4, 'sanduiche': 1.2}, drink: {'coke': 3, 'agua': 2.5} });
  });

  it('Verifica se "objetoRetornado.consumption", após a criação do menu, retorna um array vazio.', () => {
    
    expect(objetoRetornado.consumption).toEqual([]);
  });

  it('Verifica se ao passar um parâmetro para "objetoRetornado.order" ele retorna corretamente em "objetoRetornado.consumption"', () => {
    objetoRetornado.order("coxinha");

    expect(objetoRetornado.consumption).toEqual(['coxinha']);
  });

  it('Verifica se ao adicionar três pedidos, dentre bebidas e comidas, o array objetoRetornado.consumption contém os itens pedidos', () => {
    const objeto = createMenu({ food: {}, drink: {} });

    objeto.order("agua");
    objeto.order("sopa");
    objeto.order("sashimi");

    expect(objeto.consumption).toEqual(['agua','sopa','sashimi']);
  });

  it('Verifica se a função "order" aceita que pedidos repetidos sejam acrescidos a "consumption"', () => {
    const objeto = createMenu({ food: {}, drink: {} });

    objeto.order('coxinha');
    objeto.order('agua');
    objeto.order('coxinha');

    expect(objeto.consumption).toEqual(['coxinha','agua','coxinha']);
  });

  it('Verifica que, ao chamar "objetoRetornado.pay()", retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em "objetoRetornado.consumption"', () => {
    const objeto = createMenu({ food: {'coxinha': 3.9, 'pizza': 2.4, 'sanduiche': 1.2}, drink: {'coke': 3, 'agua': 2.5} });
    
    objeto.order('coxinha');
    objeto.order('pizza');
    objeto.order('coke');

    expect(objeto.pay()).toBe(10.23);
  });  
});
