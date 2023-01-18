/**
 * 根据文件名前面的日期排序
 *
 * */
const iconv = require('iconv-lite');
const {exec} = require("child_process");
let str=``
let list = str.split('\n')

const arrSortByDate=(arr)=>{
    arr.sort((a, b) => {
        const t1 = Date.parse(a.slice(0,10).replace('-','/'))
        const t2 = Date.parse(b.slice(0,10).replace('-','/'))
        return t1 - t2
    })
    return arr
}
let result = arrSortByDate(list).join('\n')
exec('clip').stdin.end(iconv.encode(result, 'gbk'));
console.log(result)
