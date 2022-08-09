const connection = require('../models/connection');

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

module.exports = { getCep, createCep };