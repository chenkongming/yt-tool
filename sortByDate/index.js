/**
 * 根据文件名前面的日期排序
 *
 * */
const iconv = require('iconv-lite');
const {exec} = require("child_process");
let str=`2022-08-09 22.33.52兄弟们这力气_你敢相信她是萌妹子_#二次元_#这谁顶得住啊_#美女_#动漫_#你心动了吗_
2022-08-19 20.50.48小姐姐缺女朋友还是男朋友#女装大佬_#美女_#比女人还美的男人#颜值_
2022-08-24 17.28.34这能输_#破防了_#开眼界了_#颠覆三观_#遗憾是常有吧_#抄袭_#栓q_
2022-09-01 21.13.13迪迦一笑生死难料#黑暗迪迦_#你相信光吗#网文_#小说_
2022-09-16 18.25.06谁能拒绝一米七五的大萝莉呢_#萝莉_#御姐_#美女__#是一只九龄#神仙颜值#可爱到爆炸__
`
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
console.log('结果已复制到粘贴板')
