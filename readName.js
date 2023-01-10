/**
 * 读取文件名字
 * */
const fs = require('fs')
const readDir = fs.readdirSync("./");
const result = readDir.map(item=>item.replace(/.mp4/g,''))
console.log(result.join("\n"));

