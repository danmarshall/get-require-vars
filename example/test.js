var getRequireVars = require('../');
var fs = require('fs');

var userArgs = process.argv.splice(2);

var filename = userArgs[0];

var src = fs.readFileSync(filename);

console.dir(getRequireVars(src));