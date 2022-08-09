const cepServices = require('../services/cepServices');

const getCep = async (req, res) => {
  const { cep } = req.params;
  const { resCode, code, message, response } = await cepServices.getCep(cep);

  if (message) res.status(resCode).json({ error: { code, message } });

  res.status(resCode).json(response);
}

module.exports = { getCep };