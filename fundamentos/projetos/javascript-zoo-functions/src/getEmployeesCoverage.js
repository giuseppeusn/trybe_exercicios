const { employees, species } = require('../data/zoo_data');

const makeObj = (employee, specie, locations) => {
  const obj = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: specie,
    locations,
  };

  return obj;
};

const getEmployee = (employee) => {
  const responsible = species.filter((item) => employee.responsibleFor.includes(item.id));
  const responsibleName = responsible.map((x) => x.name);
  const responsibleLoca = responsible.map((x) => x.location);

  return makeObj(employee, responsibleName, responsibleLoca);
};

const getAllEmployees = () => {
  const obj = employees.map((item) => {
    const responsible = species.filter((elem) => item.responsibleFor.includes(elem.id));

    const responsibleName = responsible.map((x) => x.name);
    const responsibleLoca = responsible.map((x) => x.location);

    return makeObj(item, responsibleName, responsibleLoca);
  });

  return obj;
};

function getEmployeesCoverage(data = 0) {
  const { name, id } = data;

  if (data === 0) {
    return getAllEmployees();
  }

  const employee = employees
    .find((item) => item.firstName === name || item.lastName === name || item.id === id);

  if (employee === undefined) throw new Error('Informações inválidas');

  return getEmployee(employee);
}

module.exports = getEmployeesCoverage;
