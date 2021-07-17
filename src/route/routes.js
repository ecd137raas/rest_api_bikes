const express = require('express');
const routes = express.Router();

const bikeServices = require('../services/bikeService')

routes.get('/bikes', async (req, res) => {
    const bikes = await bikeServices.getBikes();
    res.json(bikes)
})

routes.get('/bikes/:id', async (req, res) => {
    const bike = await bikeServices.getBike(req.params.id);
    res.json(bike)
})

routes.post('/bikes', async (req, res) => {
    const data = req.body
    const response = await bikeServices.saveBike(data);
    res.json(response)
})

routes.put('/bikes/:id', async (req, res) => {
    const data = req.body
    await bikeServices.updateBike(req.params.id, data);
    res.end()
})

module.exports = routes;
