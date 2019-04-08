var { expect } = require('chai')
var app = require('./app')
var schema = require('./simpleData');

it('input data to exist', () => {
  expect(schema).to.exist
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

it('removes dynamic fields from schema', () => {
  var keys = ['validation', 'test']
  var result = app.start(schema)
  var returned = {
    _id: {
      type: "number"
    }
  }
  expect(result).to.eql(returned)
  
})

// corner case na poniedziałek