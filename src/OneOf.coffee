
assertType = require "assertType"
Validator = require "Validator"
wrongType = require "wrongType"
inArray = require "in-array"

module.exports = Validator.Type "OneOf",

  init: (name, values) ->

    if arguments.length is 1
      values = name
      name = ""

    assertType name, String
    assertType values, Array

    @name = name
    @values = values

  test: (value) ->
    inArray @values, value

  assert: (value, key) ->
    return if inArray @values, value
    reason = if key then "'#{key}' has an invalid value!" else "Expected another value!"
    throw TypeError reason
