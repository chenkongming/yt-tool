/**
 * 根据文件名前面的日期排序
 *
 * */
const iconv = require('iconv-lite');
const {exec} = require("child_process");
let str=`2022-08-09 22.33.52兄弟们这力气_你敢相信她是萌妹子_#二次元_#这谁顶得住啊_#美女_#动漫_#你心动了吗_
广场舞大妈：对面小代玩不了#广场舞大妈 #灵魂舞者 #广场舞战神 #气质这一块拿捏死死的 #广场舞 #美女 #舞蹈
2022-08-19 20.50.48小姐姐缺女朋友还是男朋友#女装大佬_#美女_#比女人还美的男人#颜值_
2022-08-24 17.28.34这能输_#破防了_#开眼界了_#颠覆三观_#遗憾是常有吧_#抄袭_#栓q_
2022-09-01 21.13.13迪迦一笑生死难料#黑暗迪迦_#你相信光吗#网文_#小说_
2022-09-16 18.25.06谁能拒绝一米七五的大萝莉呢_#萝莉_#御姐_#美女__#是一只九龄#神仙颜值#可爱到爆炸__
2022-08-26 18.11.52六神之间的对决#老六yyds_#笑死我了_#偷家名场面_#整活_
2022-08-09 21.19.25女孩刚起床的声音到底多软多好听_#整活_#搞笑_#卷卷_#声优都是怪物_#声音_#声优_#御姐音_#美女
2022-09-27 18.04.48妹子只用一句话_就让所有男人破防_#颜值_#美女_#甜妹_#甜美女孩_#清纯女神_#御姐
2022-09-09 19.02.20上一秒挑战开始_下一秒挑战失败_#眼动仪挑战_#老色批_#美女_#这谁顶得住啊_#整活
2022-08-12 20.04.00导播盒饭里全是鸡腿没有一粒米_#神仙颜值_#王者荣耀_#KPL_#美女_#女神_#二次元_#二次元美女
2022-09-11 18.10.00不是吧不是吧_打喷嚏也能夹__#周姐_#爆笑_#夹子音_#提神醒脑_#主播_#萌妹
2022-09-28 20.17.30史上最惨原创_一直被模仿一直被超越_#搞笑_#整活_#变装_#猪太白变装_#原创_#一直被模仿一直被超越
2022-09-23 18.09.36小姐姐给哥斯拉配音_却从此成为万恶之源__#配音_#可爱_#哥斯拉_#大母龙yyds_#小姐姐__#小敏哟
2022-09-18 10.08.00错把女装发班主任是什么样的体验__#王者荣耀cos__#变装__#黑丝_#女装__#刻晴cos_#整活
2022-08-28 15.27.07痛_太痛了_#搞笑_#整活_#主持人_#点歌
2022-08-30 21.07.29_还是至臻版周姐强__#宝藏女孩_#甜系女孩_#美女_#可爱_#颜值_#夹子音_#哑巴新娘_#周淑怡
2022-10-15 20.03.58我不管_天王老子来了她也是个软妹子_#萌妹_#玖闻宝宝_#可爱_#说唱_#颜值_#主播名场面_#软妹
2022-10-01 20.11.55让你穿的成熟点_没让你成熟成咱奶_#cos_#cosplay_#coser_#女仆_#二次元_#御姐_#黑丝
2022-08-17 16.15.50你让我拿什么荔枝啊__#专治不开心_#交通安全_#拒绝酒驾_#搞笑视频_#搞笑配音_#奇葩_#配音_#配音搞笑
2022-09-21 17.25.01你喜欢萝莉脸御姐身_还是御姐脸萝莉身__#cos_#软妹_#可爱_#萝莉_#是一只九龄_#白姨_#御姐
2022-08-10 22.17.34这腿真细啊_#大长腿_#女装_#女装大佬_#日常_#日常vlog_#搞笑_#搞笑视频_#搞笑段子_#整活
2022 10 08 17 23 43不管是正面还是侧面 小伙的颜值已然达到顶峰 #小伙的颜值已然到达顶峰 #颜值 #这还拿不下你们 #整活
2022-08-06 22.20.21啊对对对_桥洞底下盖小被_#搞笑_#搞笑视频_#中文梗_#啊对对_#国粹泄露.mp4
2022-08-06 22.24.23当海豹配上二次元萌妹音是什么感觉_#整活_#萌宠_#海豹_#宠物配音_#搞笑_#搞笑视频.mp4
2022-08-09 21.19.25女孩刚起床的声音到底多软多好听_#整活_#搞笑_#卷卷_#声优都是怪物_#声音_#声优_#御姐音_#美女.mp4
2022-08-29 19.36.09玩小乔被兰陵王抓了怎么办_没关系_咱们也能隐身反抓他__#游戏_#游戏日常_#高端操作_#细节操作_#游戏玩家.mp4
2022-09-04 21.45.34直接戒网瘾_#二次元_#女仆装_#角色扮演_#cos_#可爱_#声优都是怪物_#美女_#王者_#王者荣耀.mp4
2022-09-06 19.57.49当csgo队伍里有妹子_游戏水平简直飙升__#csgo__#游戏顶级操作_#整活_#女玩家csgo___.mp4
2022-09-09 19.13.33一人一嘴一奇迹_#声优都是怪物___#伪音整蛊_#室友的迷惑日常_#搞笑_#整活儿___#离谱.mp4
2022-09-13 17.59.00美羊羊不喜欢沸羊羊是有原因的#喜羊羊_#动漫_#童年动画_#动画_#爆笑_#沸羊羊_#美羊羊_#舔狗.mp4
2022-09-18 18.18.00哑巴新娘千千万_东北三省占一半_#爆笑_#整活_#哑巴新娘_#东北甜妹_#钳子音.mp4
2022-09-19 16.50.00我怎么长得和狗一样__#萌宠_#配音_#我和宠物日常_#声优都是怪物_#动物的迷惑行为_#钮祜禄安舒_.mp4
2022-10-08 17.23.43不管是正面还是侧面_小伙的颜值已然达到顶峰_#小伙的颜值已然到达顶峰_#颜值_#这还拿不下你们_#整活_.mp4`
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
