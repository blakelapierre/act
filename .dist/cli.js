'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _readline = require('readline');

var _readline2 = _interopRequireDefault(_readline);

var _custom2 = require('./custom');

var _custom3 = _interopRequireDefault(_custom2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _custom = (0, _custom3.default)('b'),
    compile = _custom.compile,
    html = _custom.html,
    vdom = _custom.vdom;

exports.default = function (_ref) {
  var stdin = _ref.stdin,
      stdout = _ref.stdout;

  var rl = _readline2.default.createInterface({ input: stdin, output: stdout });

  rl.on('line', line);

  rl.prompt();
};

function line(l) {
  if (l === '') return console.log('No input!');

  try {
    var _compile = compile(l),
        code = _compile.code;

    console.log('c', code);

    var _vdom = vdom(code),
        result = _vdom.result,
        root = _vdom.root;

    console.log({ result: result });
    console.log({ root: root });

    console.log('html', html(root));
  } catch (e) {
    console.log('E', e);
  }
}
//# sourceMappingURL=cli.js.map
