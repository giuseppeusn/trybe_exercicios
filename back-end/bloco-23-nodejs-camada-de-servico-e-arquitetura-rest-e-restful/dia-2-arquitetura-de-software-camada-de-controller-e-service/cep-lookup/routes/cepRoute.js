const express = require('express');
const route = express.Router();

const cepController = require('../controllers/cepController');

route.get('/:cep', cepController.getCep);

module.exports = route;