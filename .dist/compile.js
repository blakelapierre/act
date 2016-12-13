"use strict";
function $__interopRequire(id) {
  id = require(id);
  return id && id.__esModule && id || {default: id};
}
Object.defineProperties(module.exports, {
  __esModule: {value: true},
  default: {
    enumerable: true,
    get: function() {
      return compile;
    }
  }
});
var transform = require("babel-core").transform;
var es2015 = $__interopRequire("babel-preset-es2015").default;
var jsx = $__interopRequire("babel-plugin-transform-react-jsx").default;
function compile(text) {
  return transform(text, {
    presets: [es2015],
    plugins: [[jsx, {pragma: 'x'}]]
  });
}

//# sourceMappingURL=compile.js.map
