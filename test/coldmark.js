'use strict';

var path = require('path');
var MarkdownIt = require('../');
var generate = require('markdown-it-testgen');

describe('Codemark', () => {
  var md = new MarkdownIt({
    linkify: true
  });

  generate(path.join(__dirname, 'fixtures/coldmark'), md);
});
