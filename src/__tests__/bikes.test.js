const crypto = require('crypto')
const axios = require('axios')

const bikeService = require('../services/bikeService')

const generate = function () {
    return crypto.randomBytes(10).toString('hex')
}

test('should a get bikes', async function () {
    const bike1 = await bikeService.saveBike({
        brand: generate(),
        description: generate(),
        model: generate(),
        color: generate(),
        category: generate(),
        photo: generate(),
        price: '12.000'
    })

    const response = await axios.get('http://localhost:3333/bikes')
    const bikes = response.data

    expect(bikes).toHaveLength(1)
    await bikeService.deleteBike(bike1.id)
})
test('should a save bike', async function () {
    const data = ({
        brand: generate(),
        description: generate(),
        model: generate(),
        color: generate(),
        category: generate(),
        photo: generate(),
        price: '12.000'
    })

    const response = await axios.post('http://localhost:3333/bikes', data)
    const bike = response.data

    expect(data.brand).toBe(bike.brand)
    expect(data.description).toBe(bike.description)

    await bikeService.deleteBike(bike.id)
})
test('should a update bike', async function () {
    const bike = await bikeService.saveBike({
        brand: generate(),
        description: generate(),
        model: generate(),
        color: generate(),
        category: generate(),
        photo: generate(),
        price: '12.000'
    })
    bike.brand = generate()
    bike.description = generate()

    await axios.put(`http://localhost:3333/bikes/${bike.id}`, bike)
    const dataUpdate = bikeService.getBike(bike.id)

    //expect(dataUpdate.brand).toBe(bike.brand)
    //expect(dataUpdate.description).toBe(bike.description)

    await bikeService.deleteBike(bike.id)
})