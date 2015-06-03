# get-require-vars
Gets the calls to require() using [node-detective](https://github.com/substack/node-detective) plus the JavaScript variable declaration that calls them.

## Install

Clone this repo, then run:

`npm install`

## Example

`node example/test.js index.js`

### outputs
``` js
{
   requires: ['detective', 'escodegen'],
   statement: 'var detective = require(\'detective\'),escodegen = require(\'escodegen\')'
}
```

