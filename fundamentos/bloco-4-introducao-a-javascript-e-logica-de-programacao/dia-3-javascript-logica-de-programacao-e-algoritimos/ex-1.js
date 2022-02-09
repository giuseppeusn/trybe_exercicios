let val = [10,9,8,7,6,5,4,3,2,1];
let fat = [];
let result = 0;
let id = 0;



for (let index = 0; index < val.length; index += 1) {
  if(index != val.length - 1) {                        //verifica se o for não vai ultrapassar a quantidade de elementos do val
    if (index === 0) {                                //verifica se é o primeiro elemento, se for, o cálculo é diferente
      fat[index] = val[index] * val[index + 1];      //multiplica o val[index] pelo sucessor
    } else { 
      fat[index] = fat[index - 1] * val[index + 1]; //multiplica o a multiplicação feita anteriormente pelo sucessor
    }
  } else {
    id = index - 1; //identifica qual é a posição do elemento resultante
  }
}

console.log(fat[id]);