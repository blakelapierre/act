"use strict";
function $__interopRequire(id) {
  id = require(id);
  return id && id.__esModule && id || {default: id};
}
var readline = $__interopRequire("readline").default;
var compile = $__interopRequire("./compile").default;
var $__3 = require("process"),
    stdin = $__3.stdin,
    stdout = $__3.stdout;
var rl = readline.createInterface({
  input: stdin,
  output: stdout
});
rl.prompt('Enter');
rl.on('line', function(line) {
  return console.log(compile(line).code);
});

//# sourceMappingURL=index.js.map
