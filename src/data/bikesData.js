const database = require('../infra/database')

exports.getBikes = function () {
    return database.query('select * from bikes.bikes_sale')
}

exports.saveBike = function (data) {
    return database.one('insert into bikes.bikes_sale (brand, description, model, color, category, photo, price) values ($1, $2, $3, $4, $5, $6, $7) returning * ', [data.brand, data.description, data.model, data.color, data.category, data.photo, data.price])
}

exports.deleteBike = function (id) {
    return database.none(`delete from bikes.bikes_sale where id = ${id}`)
}