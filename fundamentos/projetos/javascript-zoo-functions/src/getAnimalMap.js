const { species } = require('../data/zoo_data');

const animalsLoca = (locations) => {
  const obj = {};
  let animalsArr = [];

  locations.forEach((item) => {
    species.forEach((elem) => {
      if (item === elem.location) {
        animalsArr.push(elem.name);
        obj[elem.location] = animalsArr;
      }
    });
    animalsArr = [];
  });

  return obj;
};

const getAnimalsNames = (elem, sex) => {
  if (sex !== 0) {
    return elem.residents.filter((animal) => animal.sex === sex).map((animal) => animal.name);
  }

  return elem.residents.map((animal) => animal.name);
};

const animalsLocaNames = (locations, sorted, sex) => {
  const obj = {};
  let names = [];

  locations.forEach((item) => {
    species.forEach((elem) => {
      if (item === elem.location) {
        const animalsName = getAnimalsNames(elem, sex);
        const animalsArr = sorted ? animalsName.sort() : animalsName;
        names.push({
          [elem.name]: animalsArr,
        });
        obj[elem.location] = names;
      }
    });
    names = [];
  });

  return obj;
};

function getAnimalMap(options = 0) {
  const { includeNames = false, sorted = false, sex = 0 } = options;
  const locations = ['NE', 'NW', 'SE', 'SW'];

  if (includeNames === false) {
    animalsLoca(locations);
  } else if (includeNames || sorted || sex === 0) {
    return animalsLocaNames(locations, sorted, sex);
  }

  return animalsLoca(locations);
}

module.exports = getAnimalMap;
