'use strict';
var MarkdownIt = require('../');

var MD = '```javascript error\n1 + 1;\n```';

var md = new MarkdownIt({
  linkify: true
});

console.log(md.render(MD));
