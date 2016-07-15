var Validator, assertType, inArray, wrongType;

assertType = require("assertType");

Validator = require("Validator");

wrongType = require("wrongType");

inArray = require("in-array");

module.exports = Validator.Type("OneOf", {
  init: function(name, values) {
    if (arguments.length === 1) {
      values = name;
      name = "";
    }
    assertType(name, String);
    assertType(values, Array);
    this.name = name;
    return this.values = values;
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

//# sourceMappingURL=map/OneOf.map
