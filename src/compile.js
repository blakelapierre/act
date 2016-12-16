import {transform} from 'babel-core';
import es2015 from 'babel-preset-es2015';
import jsx from 'babel-plugin-transform-react-jsx';

export default name =>
  text => transform(text, {
    presets: [es2015],
    plugins: [[jsx, {pragma: name}]]
  });