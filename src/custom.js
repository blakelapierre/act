import compile from './compile';
import vdom from './vdom';

export default name => ({
  compile: compile(name),
  vdom: vdom(name)
});