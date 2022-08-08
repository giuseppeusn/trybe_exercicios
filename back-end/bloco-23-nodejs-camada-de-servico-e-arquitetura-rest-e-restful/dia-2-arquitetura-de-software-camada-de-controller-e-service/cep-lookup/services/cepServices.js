const cepModels = require('../models/cepModels');

const getCep = async (cep) => {
  const cepRegex = /^\d{5}-?\d{3}$/;

  if (!cepRegex.test(cep)) {
    return { reqCode: 400, code: 'invalidData', message: 'CEP inválido' };
  }

  const result = await cepModels.getCep(cep);
  result[0].cep = `${result[0].cep.substring(0, 5)}-${result[0].cep.substring(5, 8)}`;

  if (!result.length) {
    return { reqCode: 404, code: 'notFound', message: 'CEP não encontrado' };
  }

  return { reqCode: 200, response: result };
}

module.exports = { getCep };