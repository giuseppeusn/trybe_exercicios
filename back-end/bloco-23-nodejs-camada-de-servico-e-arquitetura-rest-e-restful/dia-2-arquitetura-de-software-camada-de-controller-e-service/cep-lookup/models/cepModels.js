const connection = require('../models/connection');

const getCep = async (cep) => {
  const query = 'SELECT * FROM ceps WHERE cep = ?'

  const [result] = await connection.execute(query, [cep]);

  return result;
}

module.exports = { getCep };