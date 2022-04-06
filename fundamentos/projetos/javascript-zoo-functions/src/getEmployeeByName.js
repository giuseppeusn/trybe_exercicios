const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName !== undefined) {
    return employees.find((item) => (
      item.firstName === employeeName || item.lastName === employeeName
    ));
  }

  return {};
}

module.exports = getEmployeeByName;
