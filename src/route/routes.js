const express = require('express');
const routes = express.Router();

const bikeServices = require('../services/bikeService')

routes.get('/bikes', async (req, res) => {
    const bikes = await bikeServices.getBikes();
    res.json(bikes)

})

module.exports = routes;
