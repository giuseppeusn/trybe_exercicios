let array = ['java', 'javascript', 'python', 'html', 'css'];

let word = array[0].split('');
let count = [0];
let maior = '';

for (let x = 0; x < array.length; x += 1) {
  let word = array[x].split('');
  for(let y = 0; y < count.length; y += 1) {  
    if(word.length > count[count.length - 1]) {
      maior = x;
    }
  }
  count[x] = word.length;
}

console.log(array[maior]);