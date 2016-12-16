'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _compile = require('./compile');

var _compile2 = _interopRequireDefault(_compile);

var _vdom = require('./vdom');

var _vdom2 = _interopRequireDefault(_vdom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (name) {
  return {
    compile: (0, _compile2.default)(name),
    vdom: (0, _vdom2.default)(name)
  };
};
//# sourceMappingURL=custom.js.map
