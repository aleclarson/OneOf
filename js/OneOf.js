// Generated by CoffeeScript 1.12.4
var Validator, assertType, inArray, isType, wrongType;

assertType = require("assertType");

Validator = require("Validator");

wrongType = require("wrongType");

inArray = require("in-array");

isType = require("isType");

module.exports = Validator.Type("OneOf", {
  init: function(name, values) {
    if (values === void 0) {
      values = name;
      name = null;
    }
    if (isType(values, String)) {
      values = values.split(" ");
    }
    if (name) {
      assertType(name, String);
      this.displayName = name;
    }
    assertType(values, Array);
    this.values = values;
  },
  test: function(value) {
    return inArray(this.values, value);
  },
  assert: function(value, key) {
    var reason;
    if (inArray(this.values, value)) {
      return;
    }
    if (value === void 0) {
      reason = key ? "'" + key + "' must be defined!" : "Expected a defined value!";
    } else {
      reason = key ? "'" + key + "' has an invalid value!" : "Invalid value detected!";
    }
    return TypeError(reason);
  }
});