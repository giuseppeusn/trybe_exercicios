const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.map((elem) => species.find((item) => item.id === elem));
}

module.exports = getSpeciesByIds;
