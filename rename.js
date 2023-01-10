/**
 * 更改文件名字
 * */
const fs = require("fs");
const path = require('path');
const fileURL = require("./conf");
const url = path.join(fileURL);
const data = fs.readdirSync(fileURL);
for(let a=0;a<data.length;a++){
    // 去掉空格
    if(data[a].includes(" ")){
        fs.rename(url + data[a], url + data[a].replace(/ /g,""), (err) => {
            if(err) return console.error(err)
            console.log('rename success!',data[a])
        });
    }
}
