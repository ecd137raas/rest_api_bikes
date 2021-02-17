const express = require('express');

const marcasController = require('./controller/marcasController');
const modelosController = require('./controller/modelosController');

const routes = express.Router();

//Marcas
routes.get('/marcas', marcasController.index);
routes.get('/marcas/:nome', marcasController.index);
routes.post('/marcas', marcasController.create);
routes.put('/marcas/:id', marcasController.update);
routes.delete('/marcas/:id', marcasController.delete);
//Modelos
routes.get('/modelos', modelosController.index);
routes.get('/modelos/:id', modelosController.index);
routes.post('/modelos', modelosController.create);
routes.put('/modelos/:id', modelosController.update);
routes.delete('/modelos/:id', modelosController.delete);

module.exports = routes;