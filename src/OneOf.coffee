
assertType = require "assertType"
Validator = require "Validator"
wrongType = require "wrongType"
inArray = require "in-array"
isType = require "isType"

module.exports = Validator.Type "OneOf",

  init: (name, values) ->

    if arguments.length is 1
      values = name
      name = ""

    if isType values, String
      values = values.split " "

    assertType name, String
    assertType values, Array

    @name = name
    @getName = -> name
    @values = values
    return

  test: (value) ->
    inArray @values, value

  assert: (value, key) ->

    return if inArray @values, value

    if value is undefined
      reason =
        if key then "'#{key}' must be defined!"
        else "Expected a defined value!"

    else
      reason =
        if key then "'#{key}' has an invalid value!"
        else "Invalid value detected!"

    return TypeError reason
