/* */ 
"use strict";
var _core = require("../core-js")["default"];
exports["default"] = function set(_x, _x2, _x3, _x4) {
  var _again = true;
  _function: while (_again) {
    _again = false;
    var object = _x,
        property = _x2,
        value = _x3,
        receiver = _x4;
    desc = parent = setter = undefined;
    var desc = _core.Object.getOwnPropertyDescriptor(object, property);
    if (desc === undefined) {
      var parent = _core.Object.getPrototypeOf(object);
      if (parent !== null) {
        _x = parent;
        _x2 = property;
        _x3 = value;
        _x4 = receiver;
        _again = true;
        continue _function;
      }
    } else if ("value" in desc && desc.writable) {
      return desc.value = value;
    } else {
      var setter = desc.set;
      if (setter !== undefined) {
        return setter.call(receiver, value);
      }
    }
  }
};
exports.__esModule = true;
