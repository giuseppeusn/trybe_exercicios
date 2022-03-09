const wakeUp = () => 'Acordando!!';
const coffe = () => 'Bora tomar café!!';
const toSleep = () => 'Partiu dormir!!';

const doingThings = (func) => func();

console.log(doingThings(wakeUp));
console.log(doingThings(coffe));
console.log(doingThings(toSleep));