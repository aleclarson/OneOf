var Validator, assertType, inArray, wrongType;

assertType = require("assertType");

Validator = require("Validator");

wrongType = require("wrongType");

inArray = require("in-array");

module.exports = Validator.Type("OneOf", {
  init: function(name, values) {
    assertType(name, String);
    assertType(values, Array);
    this.name = name;
    return this.values = values;
  },
  test: function(value) {
    return inArray(this.values, value);
  },
  assert: function(value, key) {
    if (inArray(this.values, value)) {
      return;
    }
    return wrongType(this, key);
  }
});

//# sourceMappingURL=../../map/src/OneOf.map
