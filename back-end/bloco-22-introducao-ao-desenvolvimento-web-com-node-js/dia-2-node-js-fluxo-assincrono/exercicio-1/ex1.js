const promise = (val1, val2, val3) => {
  return new Promise((resolve, reject) => {
    if (typeof val1 !== 'number' || typeof val2 !== 'number' || typeof val3 !== 'number') {
      reject(new Error('informe apenas números'));
    }

    const result = (val1 + val2) * val3;

    if (result < 50) {
      reject(new Error('valor muito baixo'));
    }

    resolve(result);
  });
}

const num1 = Math.floor(Math.random() * 100 + 1);
const num2 = Math.floor(Math.random() * 100 + 1);
const num3 = Math.floor(Math.random() * 100 + 1);

// promise with then
promise(num1, num2, num3)
  .then((result) => console.log(`O resultado é: ${result}`))
  .catch((err) => console.error(`Erro: ${err.message}`));

// promise with async/await
const promiseWithTryAndCatch = async () =>{
  try {
    const result = await promise(num1, num2, num3);
    console.log(`O resultado é: ${result}`);
  } catch (err) {
    console.error(`Erro: ${err.message}`);
  } 
}

promiseWithTryAndCatch();