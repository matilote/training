var schema = require('./simpleData')

var start = (obj) => {
  const data = Object.assign({}, obj)
  const id = Object.assign({}, data._id)
  delete id.validation
  delete id.test
  return { _id: id }
}

module.exports = {
  start
}