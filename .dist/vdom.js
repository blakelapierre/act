'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name) {
  return function (code) {
    var result = void 0,
        root = void 0;

    if (name in global) throw Error(name + ' in global!');

    //no support for 'dotted' names (nested namespaces)
    global[name] = function (name, props) {
      for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        children[_key - 2] = arguments[_key];
      }

      return root = { name: name, props: props, children: children };
    };

    try {
      result = eval(code) || new Error('hold up!'); // jshint ignore:line
    } catch (e) {
      delete global[name];
      throw e;
    }

    delete global[name];

    return { result: result, root: root };
  };
};
//# sourceMappingURL=vdom.js.map
