const uniqueRandomArray = require('unique-random-array')
const cervezas = require('./cervezas.json')
const _ = require('lodash')
module.exports = {
  todas: _.sortBy(cervezas, ['nombre']),
  miPreferida: 'Ambar',
  alazar: uniqueRandomArray(cervezas)
}
