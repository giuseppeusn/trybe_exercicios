const cepServices = require('../services/cepServices');

const getCep = async (req, res) => {
  const { cep } = req.params;
  const { resCode, code, message, response } = await cepServices.getCep(cep);

  if (message) res.status(resCode).json({ error: { code, message } });

  res.status(resCode).json(response);
};

const createCep = async (req, res) => {
  const data = req.body;
  const { resCode, code, message, response } = await cepServices.createCep(data);

  if (message) res.status(resCode).json({ error: { code, message } });

  res.status(resCode).json(response);
};

module.exports = { getCep, createCep };