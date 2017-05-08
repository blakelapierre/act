let root;

export default document => ({
  b : (name, props, ...children) => (root = ({name, props, children})),

  render(container, vdom) {
    removeChildren(container);
    container.appendChild(r(vdom));

    function r (vdom) { return (typeof vdom !== 'object' ? t : n)(vdom); }

    function t (text) { return document.createTextNode(text); }

    function n ({name, props, children}) {
      const el = document.createElement(name);
      for (let name in props) setAttribute(el, name, props[name]);
      if (children) for (let i = 0; i < children.length; i++) el.appendChild(r(children[i]));
      return el;
    }

    function setAttribute(el, name, value) {
      if (name.indexOf('on') === 0) {
        const eventName = name.substring(2).toLowerCase();

        el.addEventListener(eventName, value);
      }
      else el.setAttribute(name, value);
    }

    function removeChildren(element) {
      for (let i = element.children.length - 1; i >= 0; i--) element.children[i].remove();
    }
  },

  update(container, vdom) {

  }
});