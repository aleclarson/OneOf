
# OneOf 1.0.0 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

A [`Validator`](https://github.com/aleclarson/Validator) that passes only for values that exist in the `OneOf`'s "expected values" array.

```coffee
OneOf = require "OneOf"

Axis = OneOf "Axis", [ "x", "y" ]
```
