const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const average = (index) => {
  const sum = grades[index].reduce((acc, item) =>  acc + item, 0);
  const average = sum / grades[index].length;
  
  return average;
}

function studentAverage() {
  return students.map((item, index) => (
  {
    name: item,
    average: average(index)
  }
  ));
}

console.log(studentAverage());