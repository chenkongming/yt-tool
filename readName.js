const fs = require('fs')
var readDir = fs.readdirSync("./");
const result = readDir.map(item=>item.replace(/.mp4/g,''))
console.log(result.join("\n"));

