export default name =>
  code => {
    let root;

    let i = (name, props, ...children) => (root = ({name, props, children}));

    if (name in global) throw Error(`${name} in global!`);

    //no support for 'dotted' names (nested namespaces)
    global[name] = i;

    const result = eval(code) || {}; // jshint ignore:line

    delete global[name];

    return {result, root};
  };
