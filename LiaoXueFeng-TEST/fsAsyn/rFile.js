'use strict';
var fs = require('fs');

//异步读取文件
fs.readFile('simple.txt','utf-8',function (err,data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

//异步读取图片文件
fs.readFile('simple.jpg',function (err,data) {
    if (err) {
        console.log(err);
    } else {
        //buffer对象
        // console.log(data);
        console.log(data.length + 'bytes');
        //buffer转为string
        var text = data.toString('UTF-8');
        // console.log(text);
        //string转为buffer
        var buf = Buffer.from(text,'utf-8');
        // console.log(buf);
    }
})

//同步读文件，如果同步读取文件发生错误可以用try-catch捕捉错误
var dataSync =　fs.readFileSync('simple.txt','utf-8');
console.log(dataSync);

try {
    var data = fs.readFileSync('simple.txt','utf-8');
    console.log(data);
} catch (error) {
    console.log(error);
}


var writeData = 'hello node.js';

//异步写入文件
fs.writeFile('output.txt',writeData,function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok');
    }
})

//同步写入文件
var writeFileSync = "我是同步的哟";
fs.writeFileSync('out.txt',writeFileSync);

//异步读取文件状态
fs.stat('simple.txt',function (err,stat) {
    if (err) {
        console.log(err);
    } else {
        console.log('isFile:' + stat.isFile());
        console.log('isDirectory:' + stat.isDirectory());
        if (stat.isFile) {
            console.log('size:' + stat.size);
            console.log('birth time:' +stat.birthtime);
            console.log('modified time:' + stat.mtime);
        }
    }
})

//同步读取文件状态
var statSync = fs.statSync('out.txt');
console.log('isFile:' + statSync.isFile());
console.log('isDirectory:' + statSync.isDirectory());
console.log('size:' + statSync.size);
console.log('birth time:' +statSync.birthtime);
console.log('modified time:' + statSync.mtime);