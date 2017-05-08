import readline from 'readline';

import custom from './custom';

const {compile, html, vdom} = custom('b');

export default ({stdin, stdout}) => {
  const rl = readline.createInterface({input: stdin, output: stdout});

  rl.on('line', line);

  rl.prompt();
};

function line(l) {
  if (l === '') return console.log('No input!');

  try {
    const {code} = compile(l);
    console.log('c', code);
    const {result, root} = vdom(code);
    console.log({result});
    console.log({root});

    console.log('html', html(root));
  }
  catch (e) { console.log('E', e); }
}