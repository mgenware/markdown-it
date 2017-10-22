'use strict';

var ret = JSON.parse(JSON.stringify(require('./commonmark')));
ret.options.breaks = true;
ret.options.linkify = true;

module.exports = ret;
