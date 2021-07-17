const data = require('../data/bikesData')

exports.getBikes = function () {
    return data.getBikes()
}

exports.getBike = function (id) {
    return data.getBike(id)
}

exports.saveBike = function (bike) {
    return data.saveBike(bike)
}

exports.updateBike = function (id, bike) {
    return data.updateBike(id, bike)
}

exports.deleteBike = function (id) {
    return data.deleteBike(id)
}