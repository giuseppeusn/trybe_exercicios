const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age = 0) {
  return species.find((item) => item.name === animal).residents.every((item) => item.age >= age);
}

module.exports = getAnimalsOlderThan;
