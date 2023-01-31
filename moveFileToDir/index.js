/**
 * 移动文件到特定目录
 * */
const fs = require("fs");
const path = require('path');
const fileURL = require("../conf");
// 需要移动的文件名列表
const list = [
    "它怕是听懂不能找男朋友了",
    "这该死的优越感。 #属于铲屎官们的优越感",
    "如果再遇到爱的人 记得去拉着他的手",
    "无论几岁，可爱万岁 #想让人蹦蹦蹦的可爱",
    "贴纸拍照真的太绝了，几块钱的快乐你值得！#贴纸拍照 #萌宠 #博士奇",
    "这个小狗玩具好奇怪，一按就会吱吱叫",
    "大家帮我看下狗，我马上回来",
    "智商有，但不多 #萌宠 #二哈 #萌宠推荐官",
    "爱你呦",
    "这个队长看着不太聪明的样子 #二哈  #萌宠",
    "扣1加入可爱狗狗教 #你现在已经喜欢上我了吧 #萌宠 #撞脸许凯 #博士奇",
    "喜欢炫耀的美国佬 #萌宠 #抖音有萌宠 #萌宠推荐官 #博士奇 #抖音萌宠",
    "妈妈让我出门随手带上挂门把手的小垃圾",
    "给姨姨叔叔变个魔术",
    "不到6斤的狗子，5斤半的反骨 #接化发 #接化发翻唱挑战",
    "当你说出狗狗喜欢的那个词",
    "把你们家小狗发出来，看看谁家的更可爱",
    "又是精致的一天  #当朋友问我在家都跟谁玩",
    "都学废了吧",
    "这狗到底聪明还是傻 #萌宠 #二哈  #这狗成精了",
    "看来你很想离开这个家 #二哈  #萌宠 #狗狗",
    "看网上测试就试了一下 结果哭的稀里哗啦 小东西真的一直在门口等我出来  #萌宠 #治愈 #二哈",
    "它听懂了，就是不是很想理我..#去外面找这个东西回来  #萌宠",
    "这该死的压迫感 你看我够不够凶残#萌宠",
    "原来小狗狗也会有两幅面孔#萌宠",
    "关于我的洁癖狗，第n次不愿意靠近垃圾桶，陪我扔她的翔的那点事 #二哈 #萌宠",
    "真的，我发誓，厕所里没好吃的，我不吃独食 #萌宠有多粘人 #狗狗跟着上厕所",
    "这将信将疑的小眼神#铲屎官的乐趣 #狗狗",
    "那我走？ #美得很自然 #第一眼就来电 #好习惯改变生活 #精神小狗",
    "公主气质都是这样培养出来的 #萌宠",
    "铲屎官们都懂吧#萌宠 #萌宠日常记录 #铲屎官的乐趣",
    "6斤10万的肉肉想不想吃一口？#博士奇 #目瞪狗呆",
    "听这声音我可以听一整天#哈士奇 #萌宠",
    "2岁半6斤的小白脸会撒娇#博士奇 #萌宠",
    "给你看看我们家恶犬#哪儿挡得了我们 #魅力全开  #家有萌宠",
     "擦玻璃还是得卡师傅#擦玻璃 #一起擦玻璃 #擦玻璃才艺秀 #博士奇",
     "你是不是有什么瞒着我..#我最近get的新技能 #宅家迷惑行为大赏 #春天你好",
     "快夸我美#我最近get的新技能 #春天你好 #时尚潮人鉴定局   #春暖花开放肆去野",
     "我卡上点了吗？#学点本事保护你 #萌宠出道计划  #萌宠日常记录 #我家毛孩子",
     "这个本事你跟谁学的？#萌宠出道计划 #萌宠日常记录 #动物的迷惑行为",
     "阿姨问我怎么筷子少了几支##搞笑萌宠 #秀出星花样 #宠物成精啦",
      "#谁家还没个傻狗 #看我超有戏 #萌宠出道计划 #铲屎官的乐趣 #我家毛孩子",
      "那个满眼只有我的Kawhi，就这么被一根骨头给勾走了！",
      "终于给安排上了 你们说kawhi酷不酷#搞笑萌宠 #无所不能的我 #我有百变姿态",
      "粘人精天天钻腿玩 #狗 #狗狗 #宠物狗 #宠物成精啦 #宠物宠物卖萌",
      "我养你是跟你玩是吧",
      "关机失败 #狗狗 #狗子 #烈火宠溺捧脸杀 #狗狗歪头杀 #萌宠 #萌犬 #宠物",
      "给你听一首歌#萌宠成精了",
            "9个月25斤的博士奇了解一下？#卧室 #家有萌宠 #萌宠成精了 #搞笑萌宠",
            "我虽然不是二哈，但我有跟二哈一样的智商🙃 #狗子 #我不是二哈 #我真的不是二哈 #二哈 #哈士奇"
        ]
// 移动到目录名
const moveToDir = 'uped'
const readDir = fs.readdirSync(fileURL);
for (let i = 0; i < readDir.length; i++) {
    for (let j = 0; j < list.length; j++) {
        if (readDir[i].includes(list[j].slice(0,4))) {
            list.splice(j, 1)
            let sourceFile = path.join(fileURL, readDir[i]);
            let destPath = path.join(fileURL, moveToDir, readDir[i]);
            fs.rename(sourceFile, destPath,
                function(err) {
                    if (err) throw err;
                    fs.stat(destPath,
                        function(err, stats) {
                            if (err) throw err;
                            console.log('moved ' + list[j]);
                        });
                });
        }
    }
}
