var detective = require('detective');
var escodegen = require('escodegen');

var requireStatements = [];

var detectiveOpts = {
    
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

module.exports = function(src, opts) {

    var requires = detective(src, opts || detectiveOpts);
    var statement = 'var ' + requireStatements.join(',');
    
    return {
        requires: requires,
        statement: statement
    };
}