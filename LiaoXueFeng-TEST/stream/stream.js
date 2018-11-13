'use strict';

var fs = require('fs');

var rs = fs.createReadStream('sample.txt','utf-8');

rs.on('data',function (chunk) {
    console.log('data:');
    console.log(chunk);
});

rs.on('end',function () {
    console.log('end');
});

rs.on('error',function (error) {
    console.log("error:" + error);
});

var wsl = fs.createWriteStream('output.txt','utf-8');
wsl.write('使用stream写入文本数据...\n');
wsl.write('end.');
wsl.end();

var wslAgain = fs.createWriteStream('outputAgain.txt');
wslAgain.write(new Buffer('使用stream写入二进制数据...\n','utf-8'));
wslAgain.write(new Buffer('end','utf-8'));
wslAgain.end();

var rs = fs.createReadStream('sample.txt');
var ws = fs.createWriteStream('copied.txt');

rs.pipe(ws);

rs.pipe(ws,{end:false});