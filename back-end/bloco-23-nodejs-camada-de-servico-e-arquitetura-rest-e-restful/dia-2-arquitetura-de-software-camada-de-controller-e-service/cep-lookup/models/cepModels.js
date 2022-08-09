const connection = require('../models/connection');
const fetch = require('node-fetch');

const getCep = async (cep) => {
  const query = 'SELECT * FROM ceps WHERE cep = ?'

  const [result] = await connection.execute(query, [cep]);

  return result;
}

const createCep = async (data) => {
  const { cep, logradouro, bairro, localidade, uf } = data;

  const query = `INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) 
  VALUES (?, ?, ?, ?, ?)`;

  await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);
}


const serialize = (data) => ({
  cep: data.cep.split('-').join(''),
  logradouro: data.logradouro,
  bairro: data.bairro,
  localidade: data.localidade,
  uf: data.uf,
});

const getExternalCep = async (cep) => { 
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await response.json();
  const serializedData = serialize(data);

  await createCep(serializedData);

  return serializedData;
}

module.exports = { getCep, createCep, getExternalCep };