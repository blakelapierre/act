import readline from 'readline';
import compile from './compile';

import {stdin, stdout} from 'process';

const rl = readline.createInterface({input: stdin, output: stdout});

rl.prompt('Enter');

rl.on('line', line => console.log(compile(line).code));