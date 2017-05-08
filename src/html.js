// import html from './html.js';

const html = vdom => !vdom || typeof vdom === 'string' ? vdom : (({name, props, children}) => `<${name}${p(props)}>${children.map(html).join('')}</${name}>`)(vdom);

export default html;

function p (props) {
  return props ? Object.keys(props).reduce((prev, key) => `${prev} ${key}="${props[key]}"`, '') : '';
  // return props ? Object.keys(props).map(key => `${key}="${props[key]}"`).join(' ') : '';
}

// export default ({name, props, children}) => typeof vdom === 'string' ? vdom : `<${name}${props ? props.reduce()}>${html(children);

// export default function html (vdom) {
//   if (typeof vdom === 'string') return vdom;

//   return
// }