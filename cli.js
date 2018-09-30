#!/usr/bin/env node
var fs = require('fs')
var path = require('path')
const [,,project] = process.argv

if (!fs.existsSync(`sketches/${project}`)) {
    fs.mkdirSync(`sketches/${project}`);
}

fs.createReadStream('template/index.js')
    .pipe(fs.createWriteStream(`sketches/${project}/index.js`));

