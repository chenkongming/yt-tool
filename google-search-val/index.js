const axios = require("axios")
const { exec } = require('child_process');
const iconv = require('iconv-lite');

const keyValue = '哈士奇'
let url = `http://suggestqueries.google.com/complete/search?client=firefox&q=${keyValue}&callback=`
axios.get(url).then(res=>{
    console.log('====结果====')
    console.log(''+res.data[1].join(','))
    exec('clip').stdin.end(iconv.encode(res.data[1].join(','), 'gbk'));
    console.log('====已复制到剪贴板====')
})
