'use strict';

var ret = JSON.parse(JSON.stringify(require('./commonmark')));
var options = ret.options;

options.html = false;
options.xhtmlOut = true;
options.breaks = true;
options.linkify = true;

module.exports = ret;
