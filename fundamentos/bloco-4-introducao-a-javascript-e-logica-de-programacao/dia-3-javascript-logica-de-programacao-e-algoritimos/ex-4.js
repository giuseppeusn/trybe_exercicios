let maior = 0;

for (let x = 0; x <= 50; x += 1) {
  let primo = true;
  for (let y = 2; y < x; y += 1) {
    if (x % y === 0) {
      primo = false;
    } 
  }
  if (primo) {
    maior = x;
  } 
}

console.log(maior);