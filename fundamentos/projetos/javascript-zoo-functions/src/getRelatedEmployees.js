const { employees } = require('../data/zoo_data');

function isManager(id) {
  let manager = false;

  employees.forEach((item) => {
    if (item.managers.some((elem) => elem === id)) {
      manager = true;
      return manager;
    }
  });

  return manager;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const respNames = [];
    employees.forEach((item) => {
      item.managers.forEach((elem) => {
        if (elem === managerId) {
          respNames.push(`${item.firstName} ${item.lastName}`);
        }
      });
    });

    return respNames;
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
