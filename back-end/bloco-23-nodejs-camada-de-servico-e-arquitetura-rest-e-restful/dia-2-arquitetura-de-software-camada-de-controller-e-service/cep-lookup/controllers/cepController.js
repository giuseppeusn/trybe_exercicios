const cepServices = require('../services/cepServices');

const getCep = async (req, res) => {
  const { cep } = req.params;
  const { reqCode, code, message, response } = await cepServices.getCep(cep);

  if (message) res.status(reqCode).json({ error: { code, message } });

  res.status(reqCode).json(response);
}

module.exports = { getCep };