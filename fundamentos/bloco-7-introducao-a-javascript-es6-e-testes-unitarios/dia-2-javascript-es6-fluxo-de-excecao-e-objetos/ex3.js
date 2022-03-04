const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// ---------- Exercício 1 ----------

const insertValue = (obj, key, value) => {
  obj[key] = value;
}

insertValue(lesson2,'turno','noite');

// ---------- Exercício 2 ----------

const listKeys = (obj) => {
  return Object.keys(obj);
}

console.log(listKeys(lesson3));

// ---------- Exercício 3 ----------

const objLength = (obj) => {
  return Object.keys(obj).length;
}

console.log(objLength(lesson3));

// ---------- Exercício 4 ----------

const listValues = (obj) => {
  return Object.values(obj);
}

console.log(listValues(lesson3));

// ---------- Exercício 5 ----------

let allLessons = {};

allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);

// ---------- Exercício 6 ----------

const amtStudents = () => {
  let result = 0;
  const length = Object.values(allLessons).length;

  for (let x = 0; x < length; x += 1) {
    result += Object.values(allLessons)[x].numeroEstudantes;
  }

  return result;
}

console.log(amtStudents());

// ---------- Exercício 7 ----------

const getValue = (obj, key) => {
  return Object.values(obj)[key];
}

console.log(getValue(lesson1, 0));

// ---------- Exercício 8 ----------

const verifyPair = (obj, key, value) => {
  const length = Object.values(obj).length;
  let answer = 0;
  for (let x = 0; x < length; x += 1) {
    let value1 = Object.entries(obj)[x].includes(key);
    let value2 = Object.entries(obj)[x].includes(value);

    if (value1 && value2){ 
      answer = true;
      break;
    } else {
      answer = false;
    }
  }
  return answer;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));