const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const respId = employees.find((item) => item.id === id).responsibleFor[0];

  const animalId = species.find((item) => item.id === respId).residents;

  const animal = animalId.reduce((acc, elem) => {
    if (acc.age > elem.age) return acc;
    return elem;
  }, 0);

  return [animal.name, animal.sex, animal.age];
}

module.exports = getOldestFromFirstSpecies;
