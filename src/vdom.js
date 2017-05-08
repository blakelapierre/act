export default name =>
  code => {
    let result, root;

    if (name in global) throw Error(`${name} in global!`);

    //no support for 'dotted' names (nested namespaces)
    global[name] = (name, props, ...children) => (root = ({name, props, children}));

    try {
      result = eval(code) || new Error('hold up!'); // jshint ignore:line
    }
    catch (e) {
      delete global[name];
      throw e;
    }

    delete global[name];

    return {result, root};
  }
;
