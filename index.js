var PropertyModifier = include('@dmail/property').modifier;
var definePropertyOf = include('./definePropertyOf');

var define = PropertyModifier.create(definePropertyOf);

Object.define = define;

return define;