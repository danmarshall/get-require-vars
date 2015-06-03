# get-require-vars
Get the variables that call require() in a js file, as a new JavaScript statement.

## Install

Clone this repo, then run:

`npm install`

## Run

`node index.js <filename>`

## Example

`node index.js index.js`

### outputs
var detective = require('detective'),fs = require('fs'),escodegen = require('escodegen')
