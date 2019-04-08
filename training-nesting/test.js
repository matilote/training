var { expect } = require('chai')
var app = require('./app')
var schema = require('./data');

it('input data to exist', () => {
  expect(schema).to.exist
})

it('application returns schema', () => {
    expect(schema).to.equal(app.start(schema))
})

it('application returns schema keys without change', () => {
    var schemaKeys = Object.keys(schema)
    var appKeys = Object.keys(app.start(schema))
    expect(appKeys).to.eql(schemaKeys)
})

it("removes the given property in schema", () => {
  const obj = {
    validation: 'costam',
    type: 'string'
  }
  var appKeys = Object.keys(app.start(obj))
  expect(appKeys).not.to.contain('validation')
})

// corner case na poniedziałek