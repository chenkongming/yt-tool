/**
 * 获取文件名并复制
 * */
const fs = require("fs");
const fileURL = require("./conf");
const { exec } = require('child_process');
const iconv = require('iconv-lite');

const data = fs.readdirSync(fileURL);
let list = data.map(filename=>filename.slice(0,-4))
exec('clip').stdin.end(iconv.encode(list.join('\n'), 'gbk'));
console.log('已复制文件名')
