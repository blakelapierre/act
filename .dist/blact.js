'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
      removeChildren(container);
      container.appendChild(r(vdom));

      function r(vdom) {
        return ((typeof vdom === 'undefined' ? 'undefined' : _typeof(vdom)) !== 'object' ? t : n)(vdom);
      }

      function t(text) {
        return document.createTextNode(text);
      }

      function n(_ref) {
        var name = _ref.name,
            props = _ref.props,
            children = _ref.children;

        var el = document.createElement(name);
        for (var _name in props) {
          setAttribute(el, _name, props[_name]);
        }if (children) for (var i = 0; i < children.length; i++) {
          el.appendChild(r(children[i]));
        }return el;
      }

      function setAttribute(el, name, value) {
        if (name.indexOf('on') === 0) {
          var eventName = name.substring(2).toLowerCase();

          el.addEventListener(eventName, value);
        } else el.setAttribute(name, value);
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
//# sourceMappingURL=blact.js.map
