
assertType = require "assertType"
Validator = require "Validator"
wrongType = require "wrongType"
inArray = require "in-array"

module.exports = Validator.Type "OneOf",

  init: (name, values) ->

    assertType name, String
    assertType values, Array

    @name = name
    @values = values

  test: (value) ->
    inArray @values, value

  assert: (value, key) ->
    return if inArray @values, value
    wrongType this, key
