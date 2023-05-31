/**
 *
 * */
const fs = require("fs");
const path = require('path');
const fileURL = require("../conf");
const url = path.join(fileURL);
const data = fs.readdirSync(fileURL);
const allFiles = [
    {
        "index": 0,
        "url": "https://www.ixigua.com/7222904638754947643?&",
        "title": "拿财政收入80%去“豪赌”，这个城市赚发了，打工人都想去的地方"
    },
    {
        "index": 1,
        "url": "https://www.ixigua.com/7222523656851685903?&",
        "title": "中国大妈被捕，竟惊动美国出面营救？背后潜藏2万名间谍浮出"
    },
    {
        "index": 2,
        "url": "https://www.ixigua.com/7222150559926026810?&",
        "title": "年亏损1.7万亿，2400家医院不赚钱，14亿人的医药费都上哪了？"
    },
    {
        "index": 3,
        "url": "https://www.ixigua.com/7221808228097753632?&",
        "title": "芯片狂人被审！视国企为私地，千亿经费做不出芯片，国产芯片太难"
    },
    {
        "index": 4,
        "url": "https://www.ixigua.com/7221477025620591137?&",
        "title": "柳传志：排挤倪光南，送孙宏斌入狱，揭开联想内斗罕见内幕"
    },
    {
        "index": 5,
        "url": "https://www.ixigua.com/7221068160928055841?&",
        "title": "上海豪宅30万每平拍出！被封为“国学大师”的地产富豪，栽了！"
    },
    {
        "index": 6,
        "url": "https://www.ixigua.com/7220606612984201765?&",
        "title": "破产落狱16年一无所有，出狱突然发现北京还有264套房价值10个亿"
    },
    {
        "index": 7,
        "url": "https://www.ixigua.com/7220315720146813479?&",
        "title": "任正非使出杀手锏，芯片女神黄芊芊，带领中国“芯”突出重围！"
    },
    {
        "index": 8,
        "url": "https://www.ixigua.com/7219888442262422049?&",
        "title": "“索要千万逼死老公案”今宣判，天才程序猿有什么把柄，被妻恐吓"
    },
    {
        "index": 9,
        "url": "https://www.ixigua.com/7219485742869938744?&",
        "title": "“和尚”总裁释永信，4.5亿拿地进军房地产，让少林寺转型商业化"
    },
    {
        "index": 10,
        "url": "https://www.ixigua.com/7218742581944025637?&",
        "title": "外姓人“极兔快递”杀进中国，10个月烧200亿，搅翻快递业惹众怒"
    },
    {
]
for(let a=0;a<data.length;a++){
    const source = allFiles.find(item=>data[a].includes(item.title))
    if(source){
        let newName = source.index+'-'+data[a]+'.mp4'
        fs.rename(url + data[a], url + newName, (err) => {
            if(err) return console.error(err)
            console.log('renamed:',data[a])
        });
    }
}
