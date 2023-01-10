/**
 * 移动文件
 * */
const fs = require("fs");
const path = require('path');
const fileURL = require("./conf");
const list = [
]
const readDir = fs.readdirSync(fileURL);
console.log('readDir',readDir[1])
for (let i = 0; i < readDir.length; i++) {
    for (let j = 0; j < list.length; j++) {
        if (readDir[i].includes(list[j])) {
            list.splice(j, 1)
            let sourceFile = path.join(__dirname, readDir[i]);
            let destPath = path.join(__dirname, "版权主张", readDir[i]);
            fs.rename(sourceFile, destPath,
                function(err) {
                    if (err) throw err;
                    fs.stat(destPath,
                        function(err, stats) {
                            if (err) throw err;
                            console.log('stats: ' + JSON.stringify(stats));
                        });
                });
        }
    }
}
