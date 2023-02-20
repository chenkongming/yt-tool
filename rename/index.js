/**
 * 去掉数字以及#号
 * */
const fs = require("fs");
const path = require('path');
const fileURL = require("../conf");
const url = path.join(fileURL);
const data = fs.readdirSync(fileURL);
for(let a=0;a<data.length;a++){
    let newName = data[a].replace(/.mp4.mp4.mp4/g,"")+'.mp4'
    fs.rename(url + data[a], url + newName, (err) => {
        if(err) return console.error(err)
        console.log('renamed:',data[a])
    });
}
