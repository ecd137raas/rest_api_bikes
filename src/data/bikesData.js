const database = require('../infra/database')

exports.getBikes = function () {
    return database.query('select * from bikes.bikes_sale')
}

exports.getBike = function (id) {
    return database.oneOrNone('select * from bikes.bikes_sale where id= $1', [id])
}

exports.saveBike = function (data) {
    return database.one('insert into bikes.bikes_sale (brand, description, model, color, category, photo, price) values ($1, $2, $3, $4, $5, $6, $7) returning * ', [data.brand, data.description, data.model, data.color, data.category, data.photo, data.price])
}

exports.updateBike = function (id, data) {
    return database.none('update bikes.bikes_sale set brand =$1, description =$2, model=$3, color=$4, category=$5, photo=$6, price=$7 where id = $8 ', [data.brand, data.description, data.model, data.color, data.category, data.photo, data.price, id])
}

exports.deleteBike = function (id) {
    return database.none('delete from bikes.bikes_sale where id = $1', [id])
}