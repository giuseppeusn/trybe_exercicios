const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((item) => item.age < 18).length;
  const adult = entrants.filter((item) => item.age >= 18 && item.age < 50).length;
  const senior = entrants.filter((item) => item.age >= 50).length;

  return { child, adult, senior };
}

function calculateEntry(entrants = {}) {
  if (Object.keys(entrants).length === 0) return 0;

  const visitors = countEntrants(entrants);
  const priceArr = [];

  const { adult, senior, child } = prices;
  priceArr.push(child, adult, senior);

  return Object.values(visitors).reduce((acc, item, index) => acc + (item * priceArr[index]), 0);
}

module.exports = { calculateEntry, countEntrants };
