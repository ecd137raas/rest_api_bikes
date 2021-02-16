const express = require('express');

const marcasController = require('./controller/marcasController');

const routes = express.Router();

routes.get('/marcas', marcasController.index);
routes.get('/marcas/:nome', marcasController.index);
routes.post('/marcas', marcasController.create);
routes.put('/marcas/:id', marcasController.update);
routes.delete('/marcas/:id', marcasController.delete);

module.exports = routes;