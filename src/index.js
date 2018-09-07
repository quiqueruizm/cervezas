const uniqueRandomArray = require('unique-random-array')
const cervezas = require('./cervezas.json')
module.exports = {
  todas: cervezas,
  miPreferida: 'Ambar',
  alazar: uniqueRandomArray(cervezas)
}
