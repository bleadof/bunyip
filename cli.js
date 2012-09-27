#!/usr/bin/env node
var program = require('./lib/options').parse(process.argv);
require("./lib/bunyip").route(program);
