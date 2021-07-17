const data = require('../data/bikesData')

exports.getBikes = function () {
    return data.getBikes()
}

exports.saveBike = function (bike) {
    return data.saveBike(bike)
}

exports.deleteBike = function (id) {
    return data.deleteBike(id)
}