let primo = [];

for(let x = 0; x <= 50; x += 1) {
  if((x % 1) === 0 && (x % x) === 0) {
    primo.push(x);
  }
}

console.log(primo);

// for(let y = 0; y < count.length; y += 1) {  
//   if(word.length > count[count.length - 1]) {
//     maior = x;
//   }
// }