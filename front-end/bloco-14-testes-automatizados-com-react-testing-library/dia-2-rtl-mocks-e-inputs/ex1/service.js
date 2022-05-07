const randomNumber = () => Math.floor(Math.random() * 100);

const toUpper = (string) => string.toUpperCase();
const firstLetter = (string) => string.split('')[0];
const oneString = (str1, str2) => str1.concat(str2);

const dogApi = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await response.json();
  console.log(data);
}

module.exports = { randomNumber, toUpper, firstLetter, oneString, dogApi }