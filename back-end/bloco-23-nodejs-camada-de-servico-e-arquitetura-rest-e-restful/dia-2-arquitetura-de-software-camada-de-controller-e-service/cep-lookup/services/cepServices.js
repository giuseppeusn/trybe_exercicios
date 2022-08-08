const cepModels = require('../models/cepModels');

const getCep = async (cep) => {
  const cepRegex = /^\d{5}-?\d{3}$/;

  if (!cepRegex.test(cep)) {
    return { reqCode: 400, code: 'invalidData', message: 'CEP inválido' };
  }

  const result = await cepModels.getCep(cep);

  if (!result.length) {
    return { reqCode: 404, code: 'notFound', message: 'CEP não encontrado' };
  }

  return { reqCode: 200, response: result[0] };
}

module.exports = { getCep };