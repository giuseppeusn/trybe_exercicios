const { species, hours } = require('../data/zoo_data');

const makeObj = (elem, exhibition) => {
  const { [elem]: { open, close } } = hours;

  return {
    officeHour: open === 0 ? 'CLOSED' : `Open from ${open}am until ${close}pm`,
    exhibition: open === 0 ? 'The zoo will be closed!' : exhibition,
  };
};

const allDays = (weekDays) => {
  const obj = {};

  weekDays.forEach((item) => {
    const exhibition = species.filter((elem) => elem.availability.includes(item))
      .map((x) => x.name);
    obj[item] = makeObj(item, exhibition);
  });

  return obj;
};

const oneDay = (day) => {
  const obj = {};
  const exhibition = species.filter((elem) => elem.availability.includes(day))
    .map((x) => x.name);

  obj[day] = makeObj(day, exhibition);

  return obj;
};

function getSchedule(scheduleTarget) {
  const weekDays = Object.keys(hours);
  const animals = species.map((item) => item.name);

  if (weekDays.includes(scheduleTarget)) {
    return oneDay(scheduleTarget);
  }

  if (animals.includes(scheduleTarget)) {
    return species.find((animal) => animal.name === scheduleTarget).availability;
  }

  return allDays(weekDays);
}

module.exports = getSchedule;
