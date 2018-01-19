'use strict';

var path = require('path');
var generate = require('markdown-it-testgen');

describe('Codemark', () => {
  var md = require('../')('coldmark');

  generate(path.join(__dirname, 'fixtures/coldmark'), md);
});
