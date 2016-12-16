'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelCore = require('babel-core');

var _babelPresetEs = require('babel-preset-es2015');

var _babelPresetEs2 = _interopRequireDefault(_babelPresetEs);

var _babelPluginTransformReactJsx = require('babel-plugin-transform-react-jsx');

var _babelPluginTransformReactJsx2 = _interopRequireDefault(_babelPluginTransformReactJsx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (name) {
  return function (text) {
    return (0, _babelCore.transform)(text, {
      presets: [_babelPresetEs2.default],
      plugins: [[_babelPluginTransformReactJsx2.default, { pragma: name }]]
    });
  };
};
//# sourceMappingURL=compile.js.map
