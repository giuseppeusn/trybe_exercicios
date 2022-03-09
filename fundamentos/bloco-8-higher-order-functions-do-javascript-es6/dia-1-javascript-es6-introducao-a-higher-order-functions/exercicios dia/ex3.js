const checkAnswers = (answers, studentsAnswers) => {
  let note = 0;

  for (let x in answers) {
    if (answers[x] === studentsAnswers[x]) {
      note += 1;
    } else if (studentsAnswers[x] === 'N.A' && studentsAnswers[x] !== answers[x]){
      note -= .5;
    }
  }

  return note;
}

const exam = (answers, studentsAnswers, callback) => { return callback(answers, studentsAnswers); }

const RIGHT_ANSWERS =   ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(exam(RIGHT_ANSWERS,STUDENT_ANSWERS,checkAnswers));