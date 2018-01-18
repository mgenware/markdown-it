'use strict';

var path = require('path');
var generate = require('markdown-it-testgen');

describe('Codemark', () => {
  var md = require('..')({
    html:         false,        // Enable HTML tags in source
    xhtmlOut:     true,        // Use '/' to close single tags (<br />).
                                // This is only for full CommonMark compatibility.
    breaks:       true,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be
                                // useful for external highlighters.
    linkify:      true,        // Autoconvert URL-like text to links
    // Enable some language-neutral replacement + quotes beautification
    typographer:  false,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '“”‘’'
  });

  generate(path.join(__dirname, 'fixtures/coldmark'), md);
});
