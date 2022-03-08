// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

const verifError = (info) => {
  if (info === 0) {
    throw new Error('ID não identificada');
  } else if (info === undefined) {
    throw new Error('Informação indisponível');
  }
};

const searchEmployee = (id, detail) => {  
  //try {
    const obj = Object.values(professionalBoard);
    const length = obj.length;
    let info = 0;

    for (let x = 0; x < length; x += 1) {
      obj[x].id === id ? info = obj[x][detail] : null;
    }

    verifError(info);

    return info
  // } catch (e) {
  //   return e.message;
  // }
  
};

console.log(searchEmployee('8579-6','firstName'));

module.exports = { searchEmployee };