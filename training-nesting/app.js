var schema = require('./simpleData')

/*
  _id: {
    type: "number",
    validation: undefined,
    test: "xxx"
  },
*/

// 1. Jak iterowac przez obiekt JS
// 2. Jakie znamy petle w JS?
//    for, while, do while, for in, for of, forEach, map

var start = (obj) => {
  const data = cloneObject(obj)
  const id = cloneObject(data._id)

  // delete id.validation
  // delete id.test

  // ---------------------------------
  const obj = {
    a: 1,
    b: 2, 
    c: 3,
    d: 4
  }

  delete id.a
  delete id.b
  delete id.c
  delete id.d

  // ...

  // Pętla

  // Wynik: {}
  // ---------------------------------


  return { _id: id }
}

module.exports = {
  start
}

const cloneObject = (source) => {
  return Object.assign({}, source)
}