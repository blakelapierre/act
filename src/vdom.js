export default name =>
  code => {
    let root;

    if (name in global) throw Error(`${name} in global!`);

    //no support for 'dotted' names (nested namespaces)
    global[name] = (name, props, ...children) => (root = ({name, props, children}));

    const result = eval(code) || new Error('hold up!'); // jshint ignore:line

    delete global[name];

    return {result, root};
  }
;
