import compile from './compile';
import vdom from './vdom';
import html from './html';

export default name => ({
  compile: compile(name),
  vdom: vdom(name),
  html
});