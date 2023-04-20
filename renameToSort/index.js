/**
 * 去掉数字以及#号
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
        "index": 11,
        "url": "https://www.ixigua.com/7218373403672379965?&",
        "title": "富婆周晓光20元起家，打拼出800亿身家却一夜归零，豪宅被拍卖"
    },
    {
        "index": 12,
        "url": "https://www.ixigua.com/7218002109453730339?&",
        "title": "神秘女富豪，巅峰时超马云，成本20元卖5000，疯狂收割女明星"
    },
    {
        "index": 13,
        "url": "https://www.ixigua.com/7217630446833074703?&",
        "title": "阿迪达斯中国大溃败，关店千家，销量暴跌，终于承认对不起中国"
    },
    {
        "index": 14,
        "url": "https://www.ixigua.com/7217276472825020962?&",
        "title": "女星收割机，钻石王老五，转头皈依佛门，今又被曝欠薪躲债"
    },
    {
        "index": 15,
        "url": "https://www.ixigua.com/7217262629457560125?&",
        "title": "王兴赶超曹德旺，力登福建首富，财富曝光，除了美团还有一大杀招"
    },
    {
        "index": 16,
        "url": "https://www.ixigua.com/7216565396500021775?&",
        "title": "隐退7年，任正非老对手杀回来了！第一代企业家中，他被小看了"
    },
    {
        "index": 17,
        "url": "https://www.ixigua.com/7216542384266576418?&",
        "title": "血亏300亿曾给员工发宝马的“江西猪王”退市？20万股民欲哭无泪"
    },
    {
        "index": 18,
        "url": "https://www.ixigua.com/7216154249074311718?&",
        "title": "澳门出现新赌王？一口气买30台劳斯莱斯，如今变卖家产"
    },
    {
        "index": 19,
        "url": "https://www.ixigua.com/7215845929885106720?&",
        "title": "拒绝章泽天，狂过王思聪，苏宁太子张康阳如何沦为老赖？"
    },
    {
        "index": 20,
        "url": "https://www.ixigua.com/7073417867609244200?&",
        "title": "一代华裔女赌王,一人横扫美国各大赌场,风光背后，为何香消玉殒？"
    },
    {
        "index": 21,
        "url": "https://www.ixigua.com/7063784989527114278?&",
        "title": "叶汉与何鸿燊“赌”了一生，他真的输了吗？"
    },
    {
        "index": 22,
        "url": "https://www.ixigua.com/7059590057874850340?&",
        "title": "非洲最勤劳国王：：不爱江山爱打工，白天修车晚上批奏折"
    },
    {
        "index": 23,
        "url": "https://www.ixigua.com/7058259760256451103?&",
        "title": "世上最穷“国王”：沙滩“建国”仅容纳一人，收入全靠与游客合照"
    },
    {
        "index": 24,
        "url": "https://www.ixigua.com/7057054292221362718?&",
        "title": "为什么西方民族很厌恶犹太人？犹太民族究竟做错了什么？"
    },
    {
        "index": 25,
        "url": "https://www.ixigua.com/7056658785384792607?&",
        "title": "富可敌国的三大金融巨鳄，掌控苹果微软，早已迈入我国市场"
    },
    {
        "index": 26,
        "url": "https://www.ixigua.com/7055953631656280615?&",
        "title": "全球第一女富婆：坐拥4100亿资产，店面遍布中国，为何单身至今？"
    },
    {
        "index": 27,
        "url": "https://www.ixigua.com/7055594648672141855?&",
        "title": "澳门再不会有赌王，网上博彩业也将消失？洗米华的兴衰史！"
    },
    {
        "index": 28,
        "url": "https://www.ixigua.com/7055232016165372424?&",
        "title": "通胀率创40年新高，美国“弹尽粮绝”？高通胀还要持续多久？"
    },
    {
        "index": 29,
        "url": "https://www.ixigua.com/7054839095436313119?&",
        "title": "富三代华裔刘特佐：套现百亿成“巨骗”，不惜重金泡女星"
    },
    {
        "index": 30,
        "url": "https://www.ixigua.com/7054170403094299149?&",
        "title": "哈萨克斯坦断电：比特币崩盘，12万人遭爆仓，数亿美元打水漂"
    },
    {
        "index": 31,
        "url": "https://www.ixigua.com/7054098364400730654?&",
        "title": "2022年美国又要采取收割计划？美元还能称霸多久？"
    },
    {
        "index": 32,
        "url": "https://www.ixigua.com/7053701600417677861?&",
        "title": "“给我20年，还你一个强大的俄罗斯”，22年后，他做到了吗？"
    },
    {
        "index": 33,
        "url": "https://www.ixigua.com/7053353157610766860?&",
        "title": "“黑客教父”郭盛华，拒绝马云高薪，多次入侵美日网站！"
    },
    {
        "index": 34,
        "url": "https://www.ixigua.com/7052993064343699998?&",
        "title": "美国欠债28万亿美元，为何没有被利息压垮？他们想了个好办法"
    },
    {
        "index": 35,
        "url": "https://www.ixigua.com/7052635764554727944?&",
        "title": "最大煤炭出口国禁止煤炭出口，有什么影响？"
    },
    {
        "index": 36,
        "url": "https://www.ixigua.com/7052622364659581470?&",
        "title": "巴比奇：甘愿放弃美国天价年薪，前苏联“航母之父”"
    },
    {
        "index": 37,
        "url": "https://www.ixigua.com/7052318198984606239?&",
        "title": "保加利亚的“奇葩集市”，逛一趟就能领个媳妇回家"
    },
    {
        "index": 38,
        "url": "https://www.ixigua.com/7051866768222093860?&",
        "title": "美国疫情进入“毫秒时代”！按秒算已经不行了，得按毫秒算才行"
    },
    {
        "index": 39,
        "url": "https://www.ixigua.com/7050784513655472670?&",
        "title": "古罗马经济曾经空前繁荣，为何背后的另一面却很乱？"
    },
    {
        "index": 40,
        "url": "https://www.ixigua.com/7048548777824616990?&",
        "title": "新赌王洗米华被批准逮捕，背后是动了谁的利益？"
    },
    {
        "index": 41,
        "url": "https://www.ixigua.com/7048167216201925131?&",
        "title": "2022年，全球主要经济体的货币政策，将如何演进？"
    },
    {
        "index": 42,
        "url": "https://www.ixigua.com/7046690435552510501?&",
        "title": "为什么欧洲国家能够避开掉入“内卷”的陷阱？"
    },
    {
        "index": 43,
        "url": "https://www.ixigua.com/7046297152254902814?&",
        "title": "多国突然增持美债，是“明智之举”还是“被逼无奈”？"
    },
    {
        "index": 44,
        "url": "https://www.ixigua.com/7045977339687404063?&",
        "title": "俄罗斯的“救世主”？执政20年，普京究竟给俄罗斯带来了什么？"
    },
    {
        "index": 45,
        "url": "https://www.ixigua.com/7044828749199573508?&",
        "title": "土耳其采取非主流货币政策，是福是祸？"
    },
    {
        "index": 46,
        "url": "https://www.ixigua.com/7043685860700586527?&",
        "title": "阿根廷传奇女性贝隆夫人：从舞女到“总统夫人”，去世时仅33岁"
    },
    {
        "index": 47,
        "url": "https://www.ixigua.com/7043370599598522916?&",
        "title": "印度性侵案为何屡禁不止？"
    },
    {
        "index": 48,
        "url": "https://www.ixigua.com/7042604865398424101?&",
        "title": "从农场主儿子到美国总统的卡特，97岁高龄仍坚持在工地搬砖盖房"
    },
    {
        "index": 49,
        "url": "https://www.ixigua.com/7042221900348686862?&",
        "title": "富豪们的死法到底能有多奇葩？有人死于抠门，有人死于“诅咒”"
    },
    {
        "index": 50,
        "url": "https://www.ixigua.com/7041168234992632323?&",
        "title": "印度第一大毒枭，莫迪最想击毙的人，美印为何联手都干不掉？"
    },
    {
        "index": 51,
        "url": "https://www.ixigua.com/7040388564437172767?&",
        "title": "广西农村娃成为“赌神”，横扫美国各大赌场，领奖时身披国旗"
    },
    {
        "index": 52,
        "url": "https://www.ixigua.com/7039995552666223137?&",
        "title": "北欧福利为何那么高，是靠什么支撑着这样的制度？中国能学吗？"
    },
    {
        "index": 53,
        "url": "https://www.ixigua.com/7039634949099487751?&",
        "title": "美联储缩减债务的号角已经吹响，提前加息的可能性有多大？"
    },
    {
        "index": 54,
        "url": "https://www.ixigua.com/7039255923390743054?&",
        "title": "欧洲十大最穷国家都有谁？乌克兰、摩尔多瓦、亚美尼亚为何垫底？"
    },
    {
        "index": 55,
        "url": "https://www.ixigua.com/7038602557719380512?&",
        "title": "美国经济为何接连遭遇重创？失业人数超3000万，90后也领救济金"
    },
    {
        "index": 56,
        "url": "https://www.ixigua.com/7038096648676835873?&",
        "title": "莫迪政府为何“认怂了”？斗不过印度农民，宣布取消三项农改法案"
    },
    {
        "index": 57,
        "url": "https://www.ixigua.com/7036651225194070559?&",
        "title": "病毒变异引发金银市场动荡，美联储加息或令金价下跌？"
    },
    {
        "index": 58,
        "url": "https://www.ixigua.com/7036306585148195364?&",
        "title": "南非再现新变异病毒，全球疫情局势紧张，专家：老人需尽快打疫苗"
    },
    {
        "index": 59,
        "url": "https://www.ixigua.com/7035553101335495207?&",
        "title": "超强变异株引发全球风险资产转移，吓坏全球股市，美股带头大跌"
    },
    {
        "index": 60,
        "url": "https://www.ixigua.com/7034798625993523724?&",
        "title": "泰国流亡女总理英拉，逃亡海外弃政从商，如今成中国公司董事长"
    },
    {
        "index": 61,
        "url": "https://www.ixigua.com/7034453480957968935?&",
        "title": "美国联手多国释放石油储备，能够降低油价，抵御通货膨胀吗？"
    },
    {
        "index": 62,
        "url": "https://www.ixigua.com/7033701141993128487?&",
        "title": "多个“世界老二”是怎么被美国整垮的？给我们留下什么样的经验？"
    },
    {
        "index": 63,
        "url": "https://www.ixigua.com/7032913691792114207?&",
        "title": "造成物价上涨、全球通胀加剧的原因有哪些？我们该如何应对？"
    },
    {
        "index": 64,
        "url": "https://www.ixigua.com/7032212658614960676?&",
        "title": "美债上限最后期限又将来临，耶伦再拉“警报”，又要提高上限？"
    },
    {
        "index": 65,
        "url": "https://www.ixigua.com/7031418504523809310?&",
        "title": "美国经济危机一触即发，面对这场经济灾难，美联储已经放弃抵抗？"
    },
    {
        "index": 66,
        "url": "https://www.ixigua.com/7030755731813073422?&",
        "title": "印度同意碳排放指标，却又向发达国家要一万亿美元，有没有道理？"
    },
    {
        "index": 67,
        "url": "https://www.ixigua.com/7030387218321506829?&",
        "title": "我们举办进博会，美国为何要慌？败退的美元和高升的人民币！"
    },
    {
        "index": 68,
        "url": "https://www.ixigua.com/7030304774553928195?&",
        "title": "美罢工潮来袭，危机四伏、通胀加剧，会给美国带来哪些影响？"
    },
    {
        "index": 69,
        "url": "https://www.ixigua.com/7029649779990725134?&",
        "title": "荷兰“红灯区合法”到现在已经21年过去了，都造成了哪些影响？"
    },
    {
        "index": 70,
        "url": "https://www.ixigua.com/7028780412184822311?&",
        "title": "油价上涨的根本原因是什么？从美俄石油大战，看懂背后的逻辑"
    },
    {
        "index": 71,
        "url": "https://www.ixigua.com/7028156216614322691?&",
        "title": "美国或迎来重大转折，11月开始实施Taper政策，有哪些影响？"
    },
    {
        "index": 72,
        "url": "https://www.ixigua.com/7027349527321379336?&",
        "title": "美国黑老大上演“监狱皇帝”，征服13名女狱警，生下5个女儿"
    },
    {
        "index": 73,
        "url": "https://www.ixigua.com/7026641079432643085?&",
        "title": "大量华人撤资，加拿大或将面临全面破产，老美也爱莫能助！"
    },
    {
        "index": 74,
        "url": "https://www.ixigua.com/7025919657731162660?&",
        "title": "美国大放水通胀爆表，企业成本转嫁消费端，对我们的影响大吗？"
    },
    {
        "index": 75,
        "url": "https://www.ixigua.com/7025164704867680798?&",
        "title": "美国餐饮涨价潮，港口拥堵依旧，遭遇供应链危机，还能过好节吗？"
    },
    {
        "index": 76,
        "url": "https://www.ixigua.com/7025068644920984078?&",
        "title": "为何美国通胀没有得到任何缓解，反倒加剧了？"
    },
    {
        "index": 77,
        "url": "https://www.ixigua.com/7024779841782317582?&",
        "title": "美国打越南花了20年之久，换了三任总统，充当了什么样的角色？"
    },
    {
        "index": 78,
        "url": "https://www.ixigua.com/7024020000948093451?&",
        "title": "投放战略储备石油，释放了什么信号？打破美国石油霸权，不远了"
    },
    {
        "index": 79,
        "url": "https://www.ixigua.com/7023318191212331527?&",
        "title": "日美的百年恩怨：被扔了两颗原子弹，为何日本还要“跪舔”美国？"
    },
    {
        "index": 80,
        "url": "https://www.ixigua.com/7022104080717709862?&",
        "title": "永暑礁300亿变永暑岛，不沉的“航空母舰”，如今作用凸显！"
    },
    {
        "index": 81,
        "url": "https://www.ixigua.com/7021850682898678302?&",
        "title": "内部矛盾激化，三十年后的美国或分裂成三个国家"
    },
    {
        "index": 82,
        "url": "https://www.ixigua.com/7021477808140452388?&",
        "title": "千亿拿下世界第二大油田，打碎美国石油垄断的美梦"
    },
    {
        "index": 83,
        "url": "https://www.ixigua.com/7021383561471066661?&",
        "title": "美国10万工人为何要罢工？物价不断上涨，未来何去何从？"
    },
    {
        "index": 84,
        "url": "https://www.ixigua.com/7020742051667018253?&",
        "title": "男的去了就是“宝”？世界十个最缺男人的国家，美女泛滥成灾！"
    },
    {
        "index": 85,
        "url": "https://www.ixigua.com/7020630317631439396?&",
        "title": "如果美国倒下，下一个“超级大国”会是谁？普京一句话让人醒悟！"
    },
    {
        "index": 86,
        "url": "https://www.ixigua.com/7020247953549820429?&",
        "title": "德国向中国出口40万套装备，却为何不要钱，只要这三种矿产？"
    },
    {
        "index": 87,
        "url": "https://www.ixigua.com/7019951055144223236?&",
        "title": "美国通胀危机雪上加霜，连圣诞节都没法过了？有多严重？"
    },
    {
        "index": 88,
        "url": "https://www.ixigua.com/7019209402607469093?&",
        "title": "崇洋媚外，卖房赴美惨遭抛弃，下场很是惨淡"
    },
    {
        "index": 89,
        "url": "https://www.ixigua.com/7018865012680688136?&",
        "title": "拜登一生有多惨？重病缠身、家破人亡、妻离子散，为何会这样？"
    },
    {
        "index": 90,
        "url": "https://www.ixigua.com/7018142341022417422?&",
        "title": "缅甸国父之女，被抛弃的昂山素季！影子总统的涅槃之路"
    },
    {
        "index": 91,
        "url": "https://www.ixigua.com/7017786942016193062?&",
        "title": "一个把自己玩废的国家，讲个笑话，乌克兰你可别哭！"
    },
    {
        "index": 92,
        "url": "https://www.ixigua.com/7017370274832056840?&",
        "title": "日本刚通缩完，又要进入全面高速通货膨胀，为何会如此反弹？"
    },
    {
        "index": 93,
        "url": "https://www.ixigua.com/7016986785238483488?&",
        "title": "6G研发之争！美日两国幻想弯道超车，我们该怎么做才能稳坐龙头？"
    },
    {
        "index": 94,
        "url": "https://www.ixigua.com/7016266603390370318?&",
        "title": "美国众议院通过暂停债务上限法案？美债大戏接下来怎么演？"
    },
    {
        "index": 95,
        "url": "https://www.ixigua.com/7016233867853955598?&",
        "title": "迪拜，世界级的填海造岛奇迹，最终却成为全球的笑柄！"
    },
    {
        "index": 96,
        "url": "https://www.ixigua.com/7015871647596937759?&",
        "title": "靠赌发达的国家，人人成为土豪，摩纳哥的传奇故事颠覆三观！"
    },
    {
        "index": 97,
        "url": "https://www.ixigua.com/7015802140786426405?&",
        "title": "世界上最小的国家梵蒂冈，隐藏的实力究竟有多大，竟然无人敢打？"
    },
    {
        "index": 98,
        "url": "https://www.ixigua.com/7015427902615487013?&",
        "title": "曾经的土豪津巴布韦，却沦为全球最穷国家，竟靠外国援助勉强度日"
    },
    {
        "index": 99,
        "url": "https://www.ixigua.com/7014354975484543491?&",
        "title": "华人数学天才马凯文，无数美国赌场老板的噩梦！"
    },
    {
        "index": 100,
        "url": "https://www.ixigua.com/7014040755794608647?&",
        "title": "普京大帝的时代落幕之后，由谁来接位？"
    },
    {
        "index": 101,
        "url": "https://www.ixigua.com/7013628332650529294?&",
        "title": "债务规模不断扩大，美债或有违约风险？金融风暴真的要来了吗？"
    }
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
