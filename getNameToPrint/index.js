/**
 * 读取文件名字并打印
 * */
const fs = require('fs')
const readDir = fs.readdirSync("./");
const result = readDir.map(item=>item.replace(/.mp4/g,''))
console.log(result.join("\n"));

