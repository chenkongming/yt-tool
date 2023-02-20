/**
 * 获取文件名并复制
 * */
const fs = require("fs");
const fileURL = require("../conf");
const path = require("path");
const url = path.join(fileURL);
const data = fs.readdirSync(fileURL);
let list = data.filter(filename=>filename.includes('mp4'))
const execSync = require("child_process").execSync;
list.forEach( file=>{
    let cmd = `ffmpeg -i ${url}${file} -vcodec copy -af "volume=-30dB" ${url}_out_${file}`
   execSync(cmd,{
        maxBuffer: 1024 * 2000
    });
})


