const fs = require("fs");
const path = require('path');
const url = path.join('./../');
const data = fs.readdirSync("./../");
for(let a=0;a<data.length;a++){
    if(data[a].includes(" ")){
        fs.rename(url + data[a], url + data[a].replace(/ /g,""), (err) => {
            if(err) return console.error(err)
            console.log('rename success!',data[a])
        });
    }
}