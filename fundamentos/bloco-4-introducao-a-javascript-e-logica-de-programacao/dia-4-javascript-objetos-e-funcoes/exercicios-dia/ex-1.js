let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// ----------- Exercicio 1 -----------

function ex1(){
  console.log('Bem-vinda, ' + info.personagem);
}

// ----------- Exercicio 2 -----------

function ex2(){
  info.recorrente = 'Sim';

  console.log(info);
}

// ----------- Exercicio 3 -----------

function ex3(){
  for (const key in info) {
    console.log(key);
  }
}

// ----------- Exercicio 4 -----------

function ex4(){
  for (const key in info) {
    console.log(info[key]);
  }
}

// ----------- Exercicio 5 -----------

function ex5(){
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

  for (const key in info) {
    if(key === 'recorrente' && info2[key] === 'Sim' && info[key] === 'Sim') {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[key] + ' e ' + info2[key]);
    }
  }
}

//------------------------------------

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// ----------- Exercicio 6 -----------

function ex6(){
  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + "'" + leitor.livrosFavoritos[0].titulo + "'");
}

// ----------- Exercicio 7 -----------

leitor.livrosFavoritos[1] = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
};


// ----------- Exercicio 8 -----------

function ex8(){
  if (leitor.livrosFavoritos.length > 1) {
    console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');
  } else {
    console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livro favorito');
  }
}

ex8();