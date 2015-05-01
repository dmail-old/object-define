var PropertyModifier = require('@dmail/property').modifier;
var definePropertyOf = require('./definePropertyOf');

var define = PropertyModifier.create(definePropertyOf);

module.exports = define;
Object.define = define;