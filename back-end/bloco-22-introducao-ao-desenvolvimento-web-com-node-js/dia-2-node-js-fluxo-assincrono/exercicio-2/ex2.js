const fs = require('fs').promises;

let characters;

const readCharacters = async () => {
  await fs.readFile('./simpsons.json', 'utf8')
    .then((data) => characters = JSON.parse(data))
    .catch((err) => {
      console.error(`Não foi possível ler o arquivo \nErro: ${err.message}`);
      process.exit(1);
    });
}

const printAllCharacters = async () => {
  await readCharacters();
  characters.forEach((character) => console.log(`${character.id} - ${character.name}`))
}

// printAllCharacters();

const charactersById = async (id) => {
  await readCharacters();
  return new Promise((resolve, reject) => {
    if (!characters.some((character) => character.id === id)) reject(new Error('id não encontrado'));

    const character = characters.find((character) => character.id === id);
    resolve(`${character.id} - ${character.name}`)
  })

}

// charactersById('10')
//   .then((character) => console.log(character))
//   .catch((err) => console.error(`Erro: ${err.message}`));

const removeCharacters = async (...ids) => {
  await readCharacters();
  const removedCharacters = characters.filter((character) => ids.includes(character.id))
  const newCharacters = characters.filter((character) => !ids.includes(character.id));
  const text = JSON.stringify(newCharacters);

  fs.writeFile('./simpsons.json', text)
    .then(() => {
      console.log('Arquivo alterado. Personagens removidos:\n')
      removedCharacters.forEach((character) => console.log(`- ${character.name}`));
    })
    .catch((error) => console.error(`Error: ${error.message}`));
}

// removeCharacters('10', '6');