'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// import html from './html.js';

var html = function html(vdom) {
  return !vdom || typeof vdom === 'string' ? vdom : function (_ref) {
    var name = _ref.name,
        props = _ref.props,
        children = _ref.children;
    return '<' + name + p(props) + '>' + children.map(html).join('') + '</' + name + '>';
  }(vdom);
};

exports.default = html;


function p(props) {
  return props ? Object.keys(props).reduce(function (prev, key) {
    return prev + ' ' + key + '="' + props[key] + '"';
  }, '') : '';
  // return props ? Object.keys(props).map(key => `${key}="${props[key]}"`).join(' ') : '';
}

// export default ({name, props, children}) => typeof vdom === 'string' ? vdom : `<${name}${props ? props.reduce()}>${html(children);

// export default function html (vdom) {
//   if (typeof vdom === 'string') return vdom;

//   return
// }
//# sourceMappingURL=html.js.map
