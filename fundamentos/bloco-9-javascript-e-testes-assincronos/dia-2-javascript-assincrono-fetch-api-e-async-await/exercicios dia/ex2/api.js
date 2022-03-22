const APIcrypcoin = 'https://api.coincap.io/v2/assets';
const APIcurrency = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json'

const fetchCurrency = async () => {
  return fetch(APIcurrency)
    .then(response => response.json())
    .then(data => data.usd.brl);
}
fetchCurrency()

const fetchList = () => {
  const myObject = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch(APIcrypcoin, myObject)
    .then(response => response.json())
    .then(data => showList(data.data))
    .catch(error => console.log('error', error));
};

const showList = async (data) => {
  const dolar = await fetchCurrency();
  const coins = data.map((item) => `${item.name} (${item.symbol}): R$ ${(item.priceUsd * dolar).toFixed(2)}`).filter((item, index) => index < 10);

  const place = document.getElementById('list');
  coins.forEach((elem) => place.innerHTML += `<li>${elem}</li>`);
}

window.onload = () => fetchList();