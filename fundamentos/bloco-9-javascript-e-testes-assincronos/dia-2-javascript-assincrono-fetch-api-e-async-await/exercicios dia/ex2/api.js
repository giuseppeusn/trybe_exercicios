const API_URL = 'https://api.coincap.io/v2/assets';

const fetchList = () => {
  const myObject = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => showList(data.data))
    .catch(error => console.log('error', error));
};

const showList = (data) => {
  const place = document.getElementById('list');
  const coins = data.map((item) => `${item.name} (${item.symbol}): USD ${parseFloat(item.priceUsd).toFixed(2)}`).filter((item, index) => index < 10);
  coins.forEach((elem) => place.innerHTML += `<li>${elem}</li>`);
}

window.onload = () => fetchList();