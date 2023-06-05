/**
 * 移动文件到特定目录
 * */
const fs = require("fs");
const path = require('path');
const fileURL = require("../conf");
// 需要移动的文件名列表
const list = [
]

// 移动到目录名
const moveToDir = '版权主张'
const readDir = fs.readdirSync(fileURL);
for (let i = 0; i < readDir.length; i++) {
    for (let j = 0; j < list.length; j++) {
        if (readDir[i].slice(0,10)===list[j].slice(0,10).replace(/ /g,"-")) {
            list.splice(j, 1)
            let sourceFile = path.join(fileURL, readDir[i]);
            let destPath = path.join(fileURL, moveToDir, readDir[i]);
            fs.rename(sourceFile, destPath,
                function(err) {
                    if (err) throw err;
                    fs.stat(destPath,
                        function(err, stats) {
                            if (err) console.error(err);
                        });
                });
        }
    }
}

