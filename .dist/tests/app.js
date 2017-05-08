(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var root = void 0;

exports.default = function (document) {
  return {
    b: function b(name, props) {
      for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        children[_key - 2] = arguments[_key];
      }

      return root = { name: name, props: props, children: children };
    },

    render: function render(container, vdom) {
      removeChildren(parent);
      parent.appendChild(r(vdom));

      function r(vdom) {
        return (typeof vdom === 'string' ? t : n)(vdom);
      }

      function t(text) {
        return document.createTextElement(text);
      }

      function n(_ref) {
        var type = _ref.type,
            props = _ref.props,
            children = _ref.children;

        var el = document.createElement(type);
        for (var name in props) {
          el.setAttribute(name, props[name]);
        }for (var i = 0; i < children.length; i++) {
          el.appendChild(r(document, children[i]));
        }return el;
      }

      function removeChildren(element) {
        for (var i = element.children.length - 1; i >= 0; i--) {
          element.children[i].remove();
        }
      }
    },
    update: function update(container, vdom) {}
  };
};


},{}],2:[function(require,module,exports){
'use strict';

var _blact2 = require('../blact');

var _blact3 = _interopRequireDefault(_blact2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _blact = (0, _blact3.default)(document),
    render = _blact.render,
    b = _blact.b;

render(document.getElementsByTagName('root')[0], b('span', {}, 'test'));


},{"../blact":1}]},{},[2]);
