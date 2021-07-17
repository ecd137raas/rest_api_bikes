const crypto = require('crypto')
const axios = require('axios')

const bikeService = require('../services/bikeService')

const generate = function () {
    return crypto.randomBytes(10).toString('hex')
}

test('should be get bikes', async function () {
    const bike1 = await bikeService.saveBike({ brand: generate(), description: generate(), model: generate(), color: generate(), category: generate(), photo: generate(), price: '12.000' })

    const response = await axios.get('http://localhost:3333/bikes')

    const bikes = response.data

    expect(bikes).toHaveLength(1)

    await bikeService.deleteBike(bike1.id)
})
