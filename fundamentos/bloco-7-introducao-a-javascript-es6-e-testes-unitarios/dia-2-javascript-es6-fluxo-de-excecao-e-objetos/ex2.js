const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const receiver = Object.values(order.order.delivery)[0];
  const recipientData = [Object.values(order)[0], Object.values(order)[1]];
  const address = [Object.values(order.address)[0], Object.values(order.address)[1], Object.values(order.address)[2]];

  console.log(`Olá ${receiver}, entrega para: ${recipientData[0]}, Telefone: ${recipientData[1]}, ${address[0]}, Nº: ${address[1]}, AP: ${address[2]}`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.payment = '50'
  const name = Object.values(order)[0];
  const pizzas = [Object.keys(order.order.pizza)[0], Object.keys(order.order.pizza)[1]];
  const drink = Object.values(order.order.drinks.coke)[0];
  const price = Object.values(order)[4];

  console.log(`Olá ${name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drink} é R$ ${price},00.`);
}

orderModifier(order);