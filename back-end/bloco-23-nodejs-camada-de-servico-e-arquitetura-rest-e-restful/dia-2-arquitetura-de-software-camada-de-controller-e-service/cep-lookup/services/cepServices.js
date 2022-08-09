const cepModels = require('../models/cepModels');
const Joi = require('joi');

const getCep = async (cep) => {
  const cepRegex = /^\d{5}-?\d{3}$/;

  if (!cepRegex.test(cep)) {
    return { resCode: 400, code: 'invalidData', message: 'CEP inválido' };
  }

  const result = await cepModels.getCep(cep);
  result[0].cep = `${result[0].cep.substring(0, 5)}-${result[0].cep.substring(5, 8)}`;

  if (!result.length) {
    return { resCode: 404, code: 'notFound', message: 'CEP não encontrado' };
  }

  return { resCode: 200, response: result[0] };
}

const createCep = async (data) => {
  const cepRegex = /^\d{5}-?\d{3}$/;

  const { error } = Joi.object({
    cep: Joi.string().not().empty().regex(cepRegex).required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required(),
  }).validate(data);

  if (error) {
    return { resCode: 400, code: 'invalidData', message: error.message };
  }

  const cep = data.cep.split('-').join('');
  data.cep = cep;

  const existCep = await cepModels.getCep(cep);
  
  if (existCep.length) return { resCode: 409, code: 'alreadyExists', message: 'CEP já existente' };

  await cepModels.createCep(data);

  return { resCode: 201, response: data };
};

module.exports = { getCep, createCep };