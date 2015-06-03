var detective = require('detective');
var fs = require('fs');
var escodegen = require('escodegen');

var userArgs = process.argv.splice(2);

var filename = userArgs[0];

var src = fs.readFileSync(filename);

var requireStatements = [];

var opts = {
    isRequire : function (node) {
        var c = node.callee;
        
        var isRequire = c 
            && node.type === 'CallExpression' 
            && c.type === 'Identifier' 
            && c.name === 'require'
        ;
        
        if (isRequire && node.arguments.length && node.arguments[0].type === 'Literal') {
            requireStatements.push(escodegen.generate(node.parent));
        }

        return isRequire;
    }
};

var requires = detective(src, opts);

process.stdout.write('var ' + requireStatements.join(','));