/**
 * 批量修改文件名
 * */
const fs = require("fs");
const path = require('path');
const fileURL = require("../conf");
const url = path.join(fileURL);
const data = fs.readdirSync(fileURL);
for(let a=0;a<data.length;a++){
    let newName = data[a].replace(/_/g,"")+'.mp4'
    fs.rename(url + data[a], url + newName, (err) => {
        if(err) return console.error(err)
        console.log('renamed:',data[a])
    });
}
