const express = require('express');

const marcasController = require('./controller/marcasController');

const routes = express.Router();

routes.get('/marcas', marcasController.index);
routes.get('/marcas/:nome', marcasController.index);
routes.post('/marcas', marcasController.create);

module.exports = routes;