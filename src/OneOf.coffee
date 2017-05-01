
assertType = require "assertType"
Validator = require "Validator"
wrongType = require "wrongType"
inArray = require "in-array"
isType = require "isType"

module.exports = Validator.Type "OneOf",

  init: (name, values) ->

    if values is undefined
      values = name
      name = null

    if isType values, String
      values = values.split " "

    if name
      assertType name, String
      @displayName = name

    assertType values, Array
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
