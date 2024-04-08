/**
*索引：
*   s = 旁白 , i = 我 , gna = 宫女a , gnb = 宫女b , gnc = 宫女c
*   tj1 = 大太监昌贵，gnd = 宫女d
**/

/**
* ====================================
*【E61B-noobey】E6-1B剧情（非暴力不合作）如下
* ====================================
**/
monogatari.label('E61B-noobey', '简体中文', [
    //以下为二周目B结局：非暴力不合作
    //场景：太监所验处阁（bg1）
    //bgm：鸟鸣白噪音
    // 先行版默认玩家名
    {'Function':{
        'Apply':function(){
        monogatari.storage({
            player:{
            name: '寄寄'
            }
        });
        return true;
        },
        'Reverse':function(){
        monogatari.storage({
            player:{
            name: ''
            }
        });
        },
    }},
    // 设置玩家名字
    {'Function':{
        'Apply':function(){
            if(monogatari.storage('player').name==''){
                this.storage ({
                player: {
                    name: localStorage.getItem('player_name')
                }
                })
            }
        },
        'Reverse':'',
    }},
    // 设置文本框效果
    {'Function':{
        'Apply': function () {
            setTextBoxCSS(textBoxE6);
        },
    
        'Reverse': function () {
            setTextBoxCSS(textBoxDefault);
        }   
    }},
    // 解锁剧情线
    {'Function':{
        'Apply':function(){
            unlock_level('level-E6-hermit');
        },
        'Reverse':function(){
            lock_level('level-E6-hermit')
        },
    }},
    'stop music',
    'show scene #000000',
    'i 索性不要再去太监所验处了。如此自欺欺人之举，有什么意义？',
    's 你决定不再每日来往于太监所。',
    //场景：宫墙柳-春（bg2-willow-spring）
    //bgm: 蝉鸣白噪音
    'show scene willow_spring with fadeIn duration 2s',
    'play sound cicada',
    's 柳树的绿无法更浓时，宫院里开始出现蝉鸣。',
    's 不知为何，今年的夏日好像格外漫长，房间中常常弥漫着湿热黏重的气息，呼吸中时时像是吞吐着105度的滚水。',
    //场景：宫墙柳-冬（bg2-willow-winter）
    //三宫女（gna gnb gnc）
    //bgm：冬天风声白噪音
    'stop sound',
    'play sound wind_winter',
    'show scene willow_winter with fadeIn duration 2s',
    's 很快柳条褪下绿色，覆上白雪。',
    's 然而今年冬日也似是无穷无尽，掀开被窝就闻到冰箱般的气味，每晚上睡觉都感觉自己像被放进冷库的冰棍。',
    'stop sound',
    'play sound stats_down',
    'i ……奇怪，这一世宫里的条件怎么比前世差如此多？',
    'i 难道我不去验处触发了蝴蝶效应，这一世大杏要完了……',
    //剧情：得知上黑榜
    's 这天你哆嗦着身子走出房门，看见宫女们面色红润，神色如常，小小的心里不禁装满了大大的问号。',
    'i 姐姐们，我不知道姐姐们原来身体素质这样好……我每天晚上都冻得发昏，可是姐姐们看上去一点儿也不冷？',
    's 宫女姐姐见状抓住你的胳膊。',
    'show character gna normal',
    'gna 哎呀，妹妹，都不知道一阵儿不见，你竟然过得这样辛苦……可心疼死我了。',
    'hide character gna',
    'show character gnc normal',
    'gnc 冻得发昏？他们是克扣了你的炭火么？',
    'hide character gnc',
    'show character gnb normal',
    'gnb 可不就是！你们没有看太监所前面贴着的黑榜吗？',
    'show character gnb think',
    'gnb 9527妹妹已经上榜好久了。入夏前就有你的名字，想必你当时也少了冰吧。',
    'i ……啊，是因为我没有去验处么？',
    'hide character gnb',
    'show character gna whisper',
    'gna 想来应该就是了。这些人竟然这样对待我们妹妹！真是苦了你了……',
    'hide character gna',
    'i （原来如此……只要我乖乖去验处，没准我还能求他们恢复我的俸禄，或许也不至于每晚都被冻醒……）',
    'i （可是……就这样认错吗？）',
    'show character gnc normal',
    'gnc 妹妹莫担心，我们给你想法子。',
    'hide character gnc',
    'show character gnb normal',
    'gnb 没错，妹妹你行我们不敢行之事，于我们实在是莫大的安慰。',
    'gnb 这点小事，我们一定想法子给你解决。',
    'hide character gnb',
    //剧情：收到物资
    //音效：敲窗声
    'show scene #000000 with fadeIn duration 3s',
    's 又过了一些日子。',
    'play sound knocking_door',
    's 某日入夜，你听到有人敲窗。',
    //场景：放着包裹的窗台（bg3-window-bag）
    'show scene bag with fadeIn duration 3s',
    's 打开窗，只见窗边放了一个黑色布袋，袋子里装的是布料、糕点、炭火，还有棉被。',
    's 你拿起袋子，闻到一阵熟悉的味道——是平日与你结伴验处的姐妹们常用的香料。',
    //场景：窗台（bg3-window-nobag）
    'show scene nobag with fadeIn',
    'i （承着这份雪中送炭的恩情，还有什么熬不过去的呢？）',
    'i （但人终归要靠自己。）',
    //场景：宫墙柳-春（bg2-willow-spring）
    'show scene #000000',
    's 每日省下来大把数砖去太监所的时间，你开始种菜种树，制冰制炭，',
    's 渐渐地，你开始在后宫过上闲云野鹤的隐居生活，还自号为"是非处居士"。',
    //剧情：菜地乘凉
    //场景：菜地（bg4-farm）
    //人物：三宫女（gna gnb gnc）
    'show scene farm with fadeIn duration 3s',
    'play sound cicada',
    's 时间流转，又是一年夏，姐妹们来你种的葡萄藤下纳凉。',
    'show character gna normal',
    'gna 妹妹，你这一日日的……何苦这般，过得像粗鄙下人？',
    'gna 种地制炭的功夫，都够你走去验处多少回啦？',
    'hide character gna',
    'i （笑）可种出来的是一粒粒是粮食，验出来的一次次却是昌贵干儿子们的赌资。',
    'i 不过是不愿意陪他们唱这出戏罢了，验处阁那个戏台子我不爱登，所以自个另搭了一个，葡萄总比太监的脸好看，是吧姐姐？',
    'show character gnb smile',
    'gnb 那可不，葡萄有红有紫，太监脸可就非青即白啦！',
    's 姐妹们一同大笑。',
    'hide character gnb',
    'show character gnc titter',
    'gnc 妹妹，那你这是非处居士的号又为何意？',
    'hide character gnc',
    'i （擦了把汗，大笑）是处乎，非处乎，是非自处也，远是非之处也。',
    //剧情：终老
    //宫墙柳-春（bg2-willow-spring）与宫墙柳-冬（bg2-willow-winter）交错淡入淡出，作为时间流逝效果
    'show scene #000000',
    'centered',
    'show scene willow_winter with fadeIn duration 2s',
    's 就这样，从秋到冬，',
    'show scene willow_spring with fadeIn duration 2s',
    's 又从春到夏，',
    's 这般神仙日子活到九十九，熬过了老不死的性无能，也熬过了帝国的命数。',
    'play sound notification',
    'show message Ending-fblbhz',
    'end',

    /*
        藤原：此处未设置节点跳转；需要之后补。
        此处自动跳转到本体线核酸监督【不】冲塔剧情（所有选项开放）（需要在核酸线的开头定义环境变量？）
        核酸线还没有转写，等核酸线设完再设置跳转节点
    */

])

/**
* ====================================
*【E61C】E6-1C剧情（后宫线二周目C结局）如下
* ====================================
**/
monogatari.label ('E61C-protest', '简体中文', [
        // 先行版默认玩家名
        {'Function':{
            'Apply':function(){
            monogatari.storage({
                player:{
                name: '寄寄'
                }
            });
            return true;
            },
            'Reverse':function(){
            monogatari.storage({
                player:{
                name: ''
                }
            });
            },
        }},
        //设置玩家名字
        {'Function':{
            'Apply':function(){
                if(monogatari.storage('player').name==''){
                    this.storage ({
                    player: {
                        name: localStorage.getItem('player_name')
                    }
                    })
                }
            },
            'Reverse':'',
        }},
        // 设置文本框效果
        {'Function':{
            'Apply': function () {
                setTextBoxCSS(textBoxE6);
            },
        
            'Reverse': function () {
                setTextBoxCSS(textBoxDefault);
            }   
        }},
        // 解锁剧情线
        {'Function':{
            'Apply':function(){
              unlock_level('level-E6-fire');
            },
            'Reverse':function(){
              lock_level('level-E6-fire')
            },
        }},
        //以下为二周目C结局剧情：组织抗议
        'stop music',
        'show scene #000000',
        's 你决定借打点之名拜访姐妹们，试探她们对于验处的态度。',
        //剧情：初步议事
        //场景：宫院内部-菜地（bg4-farm）
        //人物： 三宫女（gna gnb gnc）
        'play sound bird',
        'show scene farm with fadeIn duration 3s',
        's 这日午膳过后，你与众姐妹聚在一处宫苑里。',
        'show character gna normal',
        'i 姐姐院里的桃花开得真好，昨日可有采露煮茶？',
        'gna 我倒是想，可你知道，昨日适逢验处，我这儿离验处阁又是最远……',
        'gna 每回验处，来去都累得不行，哪来闲情煮茶呀。',
        'i 唉……这倒是，验处费时费力，来去和列队都要时间，',
        'i 有几回日头大了，我看有些底子差的姐妹站得脸色都白了。',
        'i 我底子不算差，倒是受得住，但偏偏看不得太监那张脸，心里堵得慌。',
        'hide character gna',
        'show character gnb normal',
        'gnb 可不是！个个争当昌贵的狗，背地里赌钱斗鸡样样在行。',
        'hide character gnb',
        'show character gna normal',
        'gna 真的？妹妹你从哪知道的消息……',
        'hide character gna',
        'show character gnb normal',
        'gnb 小德子有回使唤手下人替他往外面赌场存钱，被一个姐妹听到的，不会有假。',
        'hide character gnb',
        'show character gnc normal',
        'gnc 拿的怕就是验处得的赏钱吧，自打验处以来，小德子的腰杆都比以前直。',
        'hide character gnc',
        'show character gnb normal',
        'gnb 昌贵最宠的干儿子，分到的验处名额最多也不奇怪……',
        'gnb 这宫里怕只有他们从验处中得好处，越验地位越高，成了主子。',
        'hide character gnb',
        'show character gnc normal',
        'gnc （拍桌）想到小德子那张不阴不阳的脸我就难受！',
        'i 谁不是呢姐姐！真想当面问问他摆的什么架子！',
        'hide character gnc',
        'show character gna normal',
        'gna 妹妹们冷静……我们这些不承恩宠的宫妃，过日子花的用的全凭太监们一句话，可不能撕破脸。',
        'hide character gna',
        'show character gnc normal',
        'gnc 姐姐说得是没错，但是就任他们如此作威作福，我也实在不能甘心。',
        'i 仅凭我们确是螳臂当车，但后宫姐妹不止三千，太监才区区几百……',
        'hide character gnc',
        'show character gnb normal',
        'gnb 你是说——',
        'hide character gnb',
        'show character gnc titter',
        'gnc 对呀！后宫姐妹苦验处久矣，何不拉上她们一道？',
        'hide character gnc',
        'show character gnb think',
        'gnb 可我相熟的不过你们三人，旁人也信不过，若是被出卖了如何是好？',
        'i 姐姐莫忧心，我有个法子，不必拉上许多人，也不必现身——',
        'hide character gnb',
        'show character gna normal',
        'gna 等等，妹妹们，这就决意要非行事不可了吗？',
        'i 姐姐，不是我们决意，我怕太监们将会逼得我们不得不行事。',
        'gna 此话怎讲？',
        'i 唉，但愿是我杞人忧天……今日听姐姐们说太监赌钱之事，我总是不安。',
        'i 他们把验处当作谋财之手段，处与非处全靠劳什子蛊虫，而蛊虫又全出自他们之手，',
        'i 会不会……为了验得更多——造出非处呢？',
        'hide character gna',
        'show character gnc normal',
        'gnc （站起身）他们敢！这可是欺君大罪，昌贵那颗脑袋怎么敢担！',
        'gnc 况且后宫连男根都没有，这谎撒得不可笑么？',
        'hide character gnc',
        'i 但愿他不敢，可要是他敢，我们是决计不能再忍下去的。',
        'i 七日一回也许还勉强可受，可若是两日一回，一日一回，一日几回呢？',
        'i 姐姐们院里的桃花，案上的古籍，手中的剑法，难道都要因为验处荒废了么？',
        'show character gnb normal',
        'gnb ……我是决计无法忍那般日子的……',
        'hide character gnb',
        'show character gna normal',
        'gna 话虽如此，可毕竟还没到那般境地……',
        'i 我也希望那般境地永不会到，但若是到了，也是我们的时机。',
        'i ……姐姐，若是太监们造出非处，你会同我们一道么？',
        'show character gna whisper with fadeIn',
        'gna ……我虽小心，但也不是逆来顺受的奴才，那般欺压是忍不下的。',
        'i 是了，其他姐妹想必也不乏姐姐这般想法，所以届时便是群情激愤，一呼百应之机。',
        'hide character gna',
        'show character gnc normal',
        'gnc 妹妹有法子？',
        'i 宫里姐妹虽住在四面八方，但验处所门前那条宫道却是必经之路。',
        'hide character gnc',
        'show character gnb think',
        'gnb 不错，那条路上的砖都快印我脑袋里了。',
        'i 若在造出非处，群情激愤之际，验处路上见到怒骂他们的话呢？',
        'show character gnb normal',
        'gnb 这字还得用朱笔写，让这青砖染血，我略懂书法文墨，让我来吧。',
        'hide character gnb',
        'show character gnc normal',
        'gnc 好！妹妹，你可想好一呼百应之后如何？',
        'i 姐姐有何计策？',
        'show character gnc titter',
        'gnc 我做梦都想做的事便是一把火烧了验处所的蛊虫，若能一呼百应，我必第一个放这把火。',
        'gnc 我入宫以后，虽不再能舞刀弄枪，但马步拳法也未曾荒废，正适合做跟太监们正面相对的先锋。', 
        'hide character gnc',
        'show character gna smile',
        'gna 几位妹妹之勇，甚于我平生所见男儿……我虽文武不通，但会做几件衣裳，',
        'gna 若是往宫砖上贴纸，我看还需在夜里，最好穿夜行衣，做夜行衣这差事便归我吧。',
        'i 好，好，好！能认识几位姐姐是我入宫最大的幸事！',
        'i 若想成事，可能还需要多点人手，我来结识其他姐妹，择可信任之人一同谋事。',
        'show character gna normal',
        'gna 妹妹的语气，总像笃定太监们会造出非处一般？',
        'i （当然笃定，毕竟活过一辈子……）',
        'i （笑）许是我相信太阳底下无新事，该发生的必然会来吧。',
        
        //剧情：筹备->验处频率提高
        //场景：宫墙柳-春（bg2-willow-spring）->宫墙柳-冬（bg2-willow-winter）
        //人物： 宫女d
        'play sound bird',
        'show scene willow_spring with fadeIn duration 3s',
        's 那日过后，你们各自忙于结交、制衣、拟文、习武。',
        'show scene willow_winter with fadeIn duration 3s',
        's 当验处周期即将缩短到两日一次时，你已经笼络了二十余名姐妹。',
        's 她们分别加入你们四个人的分工。时机日渐成熟，只欠那股一定会来的东风。',
        'show character tj1 normal',
        's 昌贵最终还是如前世一般趾高气昂地出现了，宣布了你们的命运。',
        'hide character tj1',
        's 可是这一回，你要这命握在自己手中。',
        'show character gnd cry',
        'gnd 只是，要将我打入冷宫的决议，恐怕难以改变……',
        'i （握住她的手，低声）姐姐，我们会去救你的，一定会。',
        'show character gnd scared',
        's 她眼下仍挂着泪，但还是在你坚定的眼神中怔愣地点了点头。',

        //剧情：夜晚贴字
        //人物： 三宫女
        //【CG1】夜行衣宫妃在宫墙上贴白纸朱字
        'show scene #000000',
        's 是夜，你们穿上夜行衣假装打更人，在宫墙贴上已经准备好的白底朱字的纸张，',
        's 纸上字字所书，皆是你们对蛊虫验处的质问，',
        'centered',
        'show image night_posters with fadeIn duration 3s',
        'centered',
        'gallery unlock E6_cg_night_posters',
        'play sound notification',
        'show message E6_cgunlock_night_posters',
        's “既无男根 何来非处”',
        's “是处非处 赌鬼不知”',
        's 数过的八百三十四块青砖上贴满密密麻麻的朱字，',
        'show character gnc innocent',
        'gnc 痛快，真痛快啊！',
        'hide character gnc',
        'show character gnb smile',
        'gnb 这些话我可忍了太久，明日青天白日，定要将它们晒尽！',
        'hide character gnb',
        'show character gna whisper',
        'gna 本以为这辈子只有凋敝的命，算不到还能这般活得像个人。',
        's 你忽然感到心头浓厚的郁愤一下被划破，终于化解开来。',
        'i 姐姐莫哭，朱字定能破了这青砖垒起的宫墙。',

        //剧情：火烧蛊虫
        //人物： 三宫女（gna gnb gnc）+gnd,大太监（tj1），宫女群像
        //藤原：在CG之前是否需要背景？还是直接黑屏？
        'show scene #000000',
        's 次日，姐妹们在数砖去太监所的路上看到这些朱字。',
        's “是啊，后宫里连有根的男人都没有，那位姐妹是如何能失清白？”',
        's “你们看这张纸上，说小德子在宫外赌坊被砍手的事……”',
        's “他们居然拿着验处攒下的钱过好日子，是处非处又全靠他们一张嘴……不出现非处才怪。”',
        's “我们入宫不是为了给这些奴才当谋财器物的！”',
        's “不公道大行其是，谁敢说下一个被扣上非处的是谁？”',
        's “时时刻刻要提心吊胆，无休无止……”',
        's “没准之后会更频繁，两日一回也满足不了他们的胃口！”',
        's “没有王法……竟然如此明目张胆欺君么！”',
        's 积压已久的不满被挑明，晒在了煌煌天日之下。',
        //【CG2】宫妃起义
        'centered',
        'show image riot with fadeIn duration 3s',
        'centered',
        'gallery unlock E6_cg_riot',
        'play sound notification',
        'show message E6_cgunlock_riot',
        'show character gnc normal',
        'gnc 这般窝囊的日子我不要过一辈子，这劳什子蛊虫不如烧了去！',
        'hide character gnc',
        'i 烧蛊虫！',
        's 一同谋事的姐妹们跟着你喊："烧蛊虫！"',
        'show scene #000000',
        's 其他姐妹们纷纷叩砖而起，在你们的带领下涌入太监所。',
        's 太监们惊慌地看着你们愤怒的脸。',
        //【CG3】火烧蛊虫
        'centered',
        'show image set_fire with fadeIn duration 3s',
        'centered',
        'gallery unlock E6_cg_set_fire',
        'play sound notification',
        'show message E6_cgunlock_set_fire',
        'tj2 做——做甚——',
        'show character gnb smile',
        'gnb 呦，今日公公终于抬眼看人啦？',
        'hide character gnb',
        'show character gna smile',
        'gna 确实是头一回见着各位完全睁开的眼睛哩！',
        'hide character gna',
        'show character gnc normal',
        'gnc （擒拿住领头的验处公公）蛊虫在哪？',
        'hide character gnc',
        'show character tj1 normal',
        'tj1 哎呦，你们——你们是反了天了。',
        'hide character tj1',
        'show character gnb smile',
        'gnb 大胆奴才，你竟敢说自己是天么！',
        'hide character gnb',
        'i 炼蛊的密室在哪里？坦白从宽，抗拒从严！',
        'show character tj1 normal',
        'tj1 放肆，你们这群贼子，这事闹到朝上，十个脑袋也不够你们掉的——',
        'hide character tj1',
        'show character tj3 normal',
        'tj3 密室在这边，随我来。',
        'hide character tj3',
        'show character gna normal',
        'gna ？？？',
        'hide character gna',
        'show character gnb normal',
        'gnb ？？？',
        'hide character gnb',
        'show character gnc normal',
        'gnc ？？？',
        'hide character gnc',
        'i （怎么回事？这小太监临阵倒戈了？）',
        'show character tj1 normal',
        'tj1 ——你！',
        'tj1 你这个吃里扒外的东西！你竟敢和这群贱人私通，里应外合！',
        'i 咦！郑公公，我原以为验处阁诸位是如胶似漆，没曾想你们竟貌合心离嘛？',
        'hide character tj1',
        'show character gnc titter',
        'gnc 姐妹们跟上！来个人按住昌贵，我们跟着小太监去把那密室端了！',
        'hide character gnc',
        'show character gnb think',
        'gnb 慢着！没准儿这他是为了保住昌贵，要调虎离山，把我们引到别处好让昌贵趁机开溜！',
        'hide character gnb',
        'show character gnc normal',
        'gnc ……好险，差点着了他的道！',
        'hide character gnc',
        'show character tj3 normal',
        'tj3 什么？我保着他做甚，好叫我们验处官以后继续喝西北风去呀？',
        'hide character tj3',
        's 四周传来一片应合声。',
        's “狗昌贵还钱！”',
        's “还我血汗钱！”',
        'i 难道昌贵的干儿子不是一个个中饱私囊，整日在外逍遥快活吗？',
        'show character tj3 normal',
        'tj3 噢（白眼），验处的确是肥缺啊，不过你看看那钱都进了谁的荷包？都叫昌贵和干儿子们拿去了！',
        'tj3 我们每天饮风餐露，已经修炼得仙风道骨了，那的确是将要羽化登仙，前往逍遥之境啦！',
        'hide character tj3',
        'show character tj1 normal',
        'tj1 公家人自然是要有苦其心志、劳其筋骨、饿其体肤的意志，才能担得起维持秩序的重任哩……是不是，小德子？',
        'hide character tj1',
        'show character gna smile',
        'gna 郑公公，小德子已经跑远咯。',
        'hide character gna',
        'show character tj3 normal',
        'tj3 不愧是外勤出得多，到了溜的时候跑得比耗子还利索。',
        'tj3 我们老实本分的验处官呢，一开始七天验一次尚还耐得住，后来变成两天验一次，一天一次，一天两次，',
        'tj3 辛劳的时间一日赛一日多，忙得连饭也吃不上了。哈哈，正好吃饭的钱也没有！',
        'tj3 我们一个个终日憔悴操劳，可是铜板却一个也没有涨！',
        'hide character tj3',
        'show character gnc normal',
        'gnc 原来不只是我们宫女苦验处久矣！',
        'hide character gnc',
        's 四周的呼喊愈发高涨。',
        's “还我血汗钱！”',
        's “还我血汗钱！”',
        'show character tj3 normal',
        'tj3 同侪们哟，这验处阁是待不下去了，哪怕直接上街要饭也赛过在这发烂发臭！我们走，去密室！',
        'hide character tj3',
        'show character gnc titter',
        'gnc （从后厨拿来点燃的柴分发给你们）今日这火，为我们自己而放，为所有苦于验处的人而放！',
        'hide character gnc',
        's “烧蛊虫！烧蛊虫！”',
        's 宫女和太监们的声音混合在一起，',
        's 蛊虫们被一烧而尽。',
        's 随后你们冲入冷宫，昨日被判为非处的宫女热泪涟涟。',
        'show character gnd cry',
        'i 姐姐莫怕，我们同你一道。',
        'hide character gnd',
        's 你们一齐在冷宫住下。',

        //剧情：前朝撤出太监
        //场景：宫墙柳-冬（bg2-willow-winter）
        'show scene willow_winter with fadeIn duration 3s',
        's 次日，代皇帝理政的前朝得知此事。',
        's 他们并不关心你们与太监的斗争，',
        's 唯独在乎钦天监所奏，后宫走水乃不祥之兆。',
        's 太监所作为走水处被取缔，大臣们唯恐这不详灭得不够彻底，',
        's 于是太监也被撤出了后宫。',
        's 而后宫皆为冷宫有损皇帝声誉，毕竟相当于直言后宫形同虚设。',
        's 在不言的默契下，冷宫的姐妹被你们救出。',
        //剧情：后宫自治
        //场景：宫墙柳树下，三宫妃自治立绘+其他的宫妃模糊剪影群像（bg5）
        'show scene willow_spring with fadeIn duration 3s',
        's 连没根的男人也从后宫中消失之后，你们便开始了女官自治。',
        'show character gna after',
        's 你张罗姐妹们读书写诗，',
        'hide character gna',
        'show character gnb after',
        's 耕种开荒，',
        'hide character gnb',
        'show character gnc after',
        's 练兵习武。',
        'show scene farm with fadeIn duration 3s',
        'play sound bird',
        's 这日用过膳后，你们众姐妹又聚在一处。',
        'show character gna after',
        'i 姐姐院里的桃花开得真好，昨日可有采露煮茶?',
        'gna 上回诗会的集子尚没编完，哪里顾得上煮茶。',
        'hide character gna',
        'show character gnb after',
        'gnb 天天念着桃花，你莫不是馋桃花糕了吧！',
        'hide character gnb',
        'show character gna after',
        'gna 说不准呢！妹妹上回写的诗可是句句不离吃食。',
        'i 大俗大雅，大俗大雅，韵对了就行，嘿嘿。',
        'hide character gna',
        'show character gnb after',
        'gnb 你最近写诗确有长进，晚上来我这吃顿好的。',
        'hide character gnb',
        'show character gnc after',
        'gnc 你又在哪开了块地？',
        'hide character gnc',
        'show character gnb after',
        'gnb 没多大，就原来太监所后面那块园子。',
        'hide character gnb',
        'show character gnc after',
        'gnc 呦，你倒是不嫌晦气。',
        'i 园子哪儿有晦气不晦气之说！',
        'i 晦气的都不在了，地又有何错？',
        'gnc 哇，学文学出长进啦？明日我来查查你的拳法如何？',
        'i ……啊，姐姐们，想起筹算的功课还没检查，我先行告辞了！',
        'hide character gnc',
        'show scene #000000',
        

        //剧情：抢回出宫权
        //场景：宫墙柳-春（bg2-willow-spring）与宫墙柳-冬（bg2-willow-winter）交错淡入淡出，作为时间流逝效果
        'centered',
        'show scene willow_winter with fadeIn duration 2.5s',
        'centered',
        'show scene willow_spring with fadeIn duration 2.5s',
        'centered',
        'show scene willow_winter with fadeIn duration 2.5s',
        'centered',
        's 又过了五年，老皇帝终于薨逝。',
        's 有大臣提起你们当年纵火之事，意在要你们殉葬。',
        's 你们提剑的提剑，拿书的拿书，闯上前朝，',
        's 文武双下，舌战群儒，剑指四方，',
        's 在朝还有前来吊唁的邻国使臣，强迫殉葬之事被捅破，',
        's 若是依旧执行难免有损帝国体面，你们因而抢回出宫养老之权。',

        //剧情：创办女子书院
        //场景：读书区和室外习武区，老年版三宫妃立绘+年轻的女学生们（bg6）
        'show scene #000000',
        's ……',
        'show scene school with fadeIn duration 3s',
        's 出宫后，早在被家族送进宫时就已经被放弃的你们无家可归，',
        's 于是你们便一起买下一个院子，开办女子书院，教女子读书习武，',
        's 至你百岁死时，它的影响已经非常深远。',
        'play sound notification',
        'show message Ending-E6true',
        'centered',
        'play music good_ending',
        'show scene #000000',
        'centered',
        // TRUE ENDING制作名单
        'centered <p>制作名单</p><p>PRODUCER: レイワジダイ株式会社</p><p>STORY: 千葉ハルキ, 淀川ニンニク, おおさくゆめ</p><p>GAME ENGINE: Monogatari, Apache Cordova</p><p>PROGRAM: 2号機, 千野キノ, 鳥山 湖辺斎, 太作夢</p><p>GRAPHICS: Kohensai Toriyama, 岡田茂のAI, にんにく</p>',
        'centered <p>MUSIC & SFX: 渡辺徹, ガレージバンド, Miho Araki, Kino Chino</p><p>TESTING: オカダの友, ヨウイチ, Haruki Chiba, 東野澪子</p><p>PROMOTION: 津門ゆうじ</p><p>EATING WATERMELONS: 無敵ドラゴン戦神, ユリシス</p><p>SPECIAL THANKS: 佐藤アオイ, savage</p>',
        'centered',
        'centered 更多离奇诡谲的平行世界，',
        'show scene E1_bus with fadeIn duration 3s',
        'centered',
        'show scene #000000',
        'centered 更加险象环生的生存挑战，',
        'show scene E3_factory with fadeIn duration 3s',
        'centered',
        'show scene #000000',
        'centered 尽在录奇志异的東京求生记！',
        'centered <p>感谢您的游玩！</p><p>東京求生记·完整版及dlc正在同步制作中，敬请期待！</p>',
        'centered',
        'end',
        /*
        藤原：此处未设置节点跳转；需要之后补。
        此处自动跳转到本体线核酸监督【不】冲塔剧情（所有选项开放）（需要在核酸线的开头定义环境变量？）
        核酸线还没有转写，等核酸线设完再设置跳转节点
        */    
])

/**
* ====================================
*【E61B-noobey】E6-1B劇情（非暴力不合作）如下
* ====================================
**/
monogatari.label('E61B-noobey', '繁體中文', [
    //以下為二周目B結局：非暴力不合作
    //場景：太監所驗處閣（bg1）
    //bgm：鳥鳴白噪音
    // 先行版默認玩家名
    {'Function':{
        'Apply':function(){
        monogatari.storage({
            player:{
            name: '寄寄'
            }
        });
        return true;
        },
        'Reverse':function(){
        monogatari.storage({
            player:{
            name: ''
            }
        });
        },
    }},
    // 設置玩家名字
    {'Function':{
        'Apply':function(){
            if(monogatari.storage('player').name==''){
                this.storage ({
                player: {
                    name: localStorage.getItem('player_name')
                }
                })
            }
        },
        'Reverse':'',
    }},
    // 設置文字方塊效果
    {'Function':{
        'Apply': function () {
            setTextBoxCSS(textBoxE6);
        },
    
        'Reverse': function () {
            setTextBoxCSS(textBoxDefault);
        }   
    }},
    // 解鎖劇情線
    {'Function':{
        'Apply':function(){
            unlock_level('level-E6-hermit');
        },
        'Reverse':function(){
            lock_level('level-E6-hermit')
        },
    }},
    'stop music',
    'show scene #000000',
    'i 索性不要再去太監所驗處了。如此自欺欺人之舉，有什麼意義？',
    's 你決定不再每日來往于太監所。',
    //場景：宮牆柳-春（bg2-willow-spring）
    //bgm: 蟬鳴白噪音
    'show scene willow_spring with fadeIn duration 2s',
    'play sound cicada',
    's 柳樹的綠無法更濃時，宮院裡開始出現蟬鳴。',
    's 不知為何，今年的夏日好像格外漫長，房間中常常彌漫著濕熱黏重的氣息，呼吸中時時像是吞吐著105度的滾水。',
    //場景：宮牆柳-冬（bg2-willow-winter）
    //三宮女（gna gnb gnc）
    //bgm：冬天風聲白噪音
    'stop sound',
    'play sound wind_winter',
    'show scene willow_winter with fadeIn duration 2s',
    's 很快柳條褪下綠色，覆上白雪。',
    's 然而今年冬日也似是無窮無盡，掀開被窩就聞到冰箱般的氣味，每晚上睡覺都感覺自己像被放進冷庫的冰棒。',
    'stop sound',
    'play sound stats_down',
    'i ……奇怪，這一世宮裡的條件怎麼比前世差如此多？',
    'i 難道我不去驗處觸發了蝴蝶效應，這一世大杏要完了……',
    //劇情：得知上黑榜
    's 這天你哆嗦著身子走出房門，看見宮女們面色紅潤，神色如常，小小的心裡不禁裝滿了大大的問號。',
    'i 姐姐們，我不知道姐姐們原來身體素質這樣好……我每天晚上都凍得發昏，可是姐姐們看上去一點兒也不冷？',
    's 宮女姐姐見狀抓住你的胳膊。',
    'show character gna normal',
    'gna 哎呀，妹妹，都不知道一陣兒不見，你竟然過得這樣辛苦……可心疼死我了。',
    'hide character gna',
    'show character gnc normal',
    'gnc 凍得發昏？他們是克扣了你的炭火麼？',
    'hide character gnc',
    'show character gnb normal',
    'gnb 可不就是！你們沒有看太監所前面貼著的黑榜嗎？',
    'show character gnb think',
    'gnb 9527妹妹已經上榜好久了。入夏前就有你的名字，想必你當時也少了冰吧。',
    'i ……啊，是因為我沒有去驗處麼？',
    'hide character gnb',
    'show character gna whisper',
    'gna 想來應該就是了。這些人竟然這樣對待我們妹妹！真是苦了你了……',
    'hide character gna',
    'i （原來如此……只要我乖乖去驗處，沒准我還能求他們恢復我的俸祿，或許也不至於每晚都被凍醒……）',
    'i （可是……就這樣認錯嗎？）',
    'show character gnc normal',
    'gnc 妹妹莫擔心，我們給你想法子。',
    'hide character gnc',
    'show character gnb normal',
    'gnb 沒錯，妹妹你行我們不敢行之事，於我們實在是莫大的安慰。',
    'gnb 這點小事，我們一定想法子給你解決。',
    'hide character gnb',
    //劇情：收到物資
    //音效：敲窗聲
    'show scene #000000 with fadeIn duration 3s',
    's 又過了一些日子。',
    'play sound knocking_door',
    's 某日入夜，你聽到有人敲窗。',
    //場景：放著包裹的窗臺（bg3-window-bag）
    'show scene bag with fadeIn duration 3s',
    's 打開窗，只見窗邊放了一個黑色布袋，袋子裡裝的是布料、糕點、炭火，還有棉被。',
    's 你拿起袋子，聞到一陣熟悉的味道——是平日與你結伴驗處的姐妹們常用的香料。',
    //場景：窗臺（bg3-window-nobag）
    'show scene nobag with fadeIn',
    'i （承著這份雪中送炭的恩情，還有什麼熬不過去的呢？）',
    'i （但人終歸要靠自己。）',
    //場景：宮牆柳-春（bg2-willow-spring）
    'show scene #000000',
    's 每日省下來大把數磚去太監所的時間，你開始種菜種樹，制冰制炭，',
    's 漸漸地，你開始在後宮過上閑雲野鶴的隱居生活，還自號為"是非處居士"。',
    //劇情：菜地乘涼
    //場景：菜地（bg4-farm）
    //人物：三宮女（gna gnb gnc）
    'show scene farm with fadeIn duration 3s',
    'play sound cicada',
    's 時間流轉，又是一年夏，姐妹們來你種的葡萄藤下納涼。',
    'show character gna normal',
    'gna 妹妹，你這一日日的……何苦這般，過得像粗鄙下人？',
    'gna 種地制炭的功夫，都夠你走去驗處多少回啦？',
    'hide character gna',
    'i （笑）可種出來的是一粒粒是糧食，驗出來的一次次卻是昌貴乾兒子們的賭資。',
    'i 不過是不願意陪他們唱這齣戲罷了，驗處閣那個戲臺子我不愛登，所以自個另搭了一個，葡萄總比太監的臉好看，是吧姐姐？',
    'show character gnb smile',
    'gnb 那可不，葡萄有紅有紫，太監臉可就非青即白啦！',
    's 姐妹們一同大笑。',
    'hide character gnb',
    'show character gnc titter',
    'gnc 妹妹，那你這是非處居士的號又為何意？',
    'hide character gnc',
    'i （擦了把汗，大笑）是處乎，非處乎，是非自處也，遠是非之處也。',
    //劇情：終老
    //宮牆柳-春（bg2-willow-spring）與宮牆柳-冬（bg2-willow-winter）交錯淡入淡出，作為時間流逝效果
    'show scene #000000',
    'centered',
    'show scene willow_winter with fadeIn duration 2s',
    's 就這樣，從秋到冬，',
    'show scene willow_spring with fadeIn duration 2s',
    's 又從春到夏，',
    's 這般神仙日子活到九十九，熬過了老不死的性無能，也熬過了帝國的命數。',
    'play sound notification',
    'show message Ending-fblbhz',
    'end',

    /*
        藤原：此處未設置節點跳轉；需要之後補。
        此處自動跳轉到本體線核酸監督【不】沖塔劇情（所有選項開放）（需要在核酸線的開頭定義環境變數？）
        核酸線還沒有轉寫，等核酸線設完再設置跳轉節點
    */

])

/**
* ====================================
*【E61C】E6-1C劇情（後宮線二周目C結局）如下
* ====================================
**/
monogatari.label ('E61C-protest', '繁體中文', [
    // 先行版默認玩家名
    {'Function':{
        'Apply':function(){
        monogatari.storage({
            player:{
            name: '寄寄'
            }
        });
        return true;
        },
        'Reverse':function(){
        monogatari.storage({
            player:{
            name: ''
            }
        });
        },
    }},
    //設置玩家名字
    {'Function':{
        'Apply':function(){
            if(monogatari.storage('player').name==''){
                this.storage ({
                player: {
                    name: localStorage.getItem('player_name')
                }
                })
            }
        },
        'Reverse':'',
    }},
    // 設置文字方塊效果
    {'Function':{
        'Apply': function () {
            setTextBoxCSS(textBoxE6);
        },
    
        'Reverse': function () {
            setTextBoxCSS(textBoxDefault);
        }   
    }},
    // 解鎖劇情線
    {'Function':{
        'Apply':function(){
          unlock_level('level-E6-fire');
        },
        'Reverse':function(){
          lock_level('level-E6-fire')
        },
    }},
    //以下為二周目C結局劇情：組織抗議
    'stop music',
    'show scene #000000',
    's 你決定借打點之名拜訪姐妹們，試探她們對於驗處的態度。',
    //劇情：初步議事
    //場景：宮院內部-菜地（bg4-farm）
    //人物： 三宮女（gna gnb gnc）
    'play sound bird',
    'show scene farm with fadeIn duration 3s',
    's 這日午膳過後，你與眾姐妹聚在一處宮苑裡。',
    'show character gna normal',
    'i 姐姐院裡的桃花開得真好，昨日可有采露煮茶？',
    'gna 我倒是想，可你知道，昨日適逢驗處，我這兒離驗處閣又是最遠……',
    'gna 每回驗處，來去都累得不行，哪來閒情煮茶呀。',
    'i 唉……這倒是，驗處費時費力，來去和列隊都要時間，',
    'i 有幾回日頭大了，我看有些底子差的姐妹站得臉色都白了。',
    'i 我底子不算差，倒是受得住，但偏偏看不得太監那張臉，心裡堵得慌。',
    'hide character gna',
    'show character gnb normal',
    'gnb 可不是！個個爭當昌貴的狗，背地裡賭錢鬥雞樣樣在行。',
    'hide character gnb',
    'show character gna normal',
    'gna 真的？妹妹你從哪知道的消息……',
    'hide character gna',
    'show character gnb normal',
    'gnb 小德子有回使喚手下人替他往外面賭場存錢，被一個姐妹聽到的，不會有假。',
    'hide character gnb',
    'show character gnc normal',
    'gnc 拿的怕就是驗處得的賞錢吧，自打驗處以來，小德子的腰杆都比以前直。',
    'hide character gnc',
    'show character gnb normal',
    'gnb 昌貴最寵的乾兒子，分到的驗處名額最多也不奇怪……',
    'gnb 這宮裡怕只有他們從驗處中得好處，越驗地位越高，成了主子。',
    'hide character gnb',
    'show character gnc normal',
    'gnc （拍桌）想到小德子那張不陰不陽的臉我就難受！',
    'i 誰不是呢姐姐！真想當面問問他擺的什麼架子！',
    'hide character gnc',
    'show character gna normal',
    'gna 妹妹們冷靜……我們這些不承恩寵的宮妃，過日子花的用的全憑太監們一句話，可不能撕破臉。',
    'hide character gna',
    'show character gnc normal',
    'gnc 姐姐說得是沒錯，但是就任他們如此作威作福，我也實在不能甘心。',
    'i 僅憑我們確是螳臂當車，但後宮姐妹不止三千，太監才區區幾百……',
    'hide character gnc',
    'show character gnb normal',
    'gnb 你是說——',
    'hide character gnb',
    'show character gnc titter',
    'gnc 對呀！後宮姐妹苦驗處久矣，何不拉上她們一道？',
    'hide character gnc',
    'show character gnb think',
    'gnb 可我相熟的不過你們三人，旁人也信不過，若是被出賣了如何是好？',
    'i 姐姐莫憂心，我有個法子，不必拉上許多人，也不必現身——',
    'hide character gnb',
    'show character gna normal',
    'gna 等等，妹妹們，這就決意要非行事不可了嗎？',
    'i 姐姐，不是我們決意，我怕太監們將會逼得我們不得不行事。',
    'gna 此話怎講？',
    'i 唉，但願是我杞人憂天……今日聽姐姐們說太監賭錢之事，我總是不安。',
    'i 他們把驗處當作謀財之手段，處與非處全靠勞什子蠱蟲，而蠱蟲又全出自他們之手，',
    'i 會不會……為了驗得更多——造出非處呢？',
    'hide character gna',
    'show character gnc normal',
    'gnc （站起身）他們敢！這可是欺君大罪，昌貴那顆腦袋怎麼敢擔！',
    'gnc 況且後宮連男根都沒有，這謊撒得不可笑麼？',
    'hide character gnc',
    'i 但願他不敢，可要是他敢，我們是決計不能再忍下去的。',
    'i 七日一回也許還勉強可受，可若是兩日一回，一日一回，一日幾回呢？',
    'i 姐姐們院裡的桃花，案上的古籍，手中的劍法，難道都要因為驗處荒廢了麼？',
    'show character gnb normal',
    'gnb ……我是決計無法忍那般日子的……',
    'hide character gnb',
    'show character gna normal',
    'gna 話雖如此，可畢竟還沒到那般境地……',
    'i 我也希望那般境地永不會到，但若是到了，也是我們的時機。',
    'i ……姐姐，若是太監們造出非處，你會同我們一道麼？',
    'show character gna whisper with fadeIn',
    'gna ……我雖小心，但也不是逆來順受的奴才，那般欺壓是忍不下的。',
    'i 是了，其他姐妹想必也不乏姐姐這般想法，所以屆時便是群情激憤，一呼百應之機。',
    'hide character gna',
    'show character gnc normal',
    'gnc 妹妹有法子？',
    'i 宮裡姐妹雖住在四面八方，但驗處所門前那條宮道卻是必經之路。',
    'hide character gnc',
    'show character gnb think',
    'gnb 不錯，那條路上的磚都快印我腦袋裡了。',
    'i 若在造出非處，群情激憤之際，驗處路上見到怒駡他們的話呢？',
    'show character gnb normal',
    'gnb 這字還得用朱筆寫，讓這青磚染血，我略懂書法文墨，讓我來吧。',
    'hide character gnb',
    'show character gnc normal',
    'gnc 好！妹妹，你可想好一呼百應之後如何？',
    'i 姐姐有何計策？',
    'show character gnc titter',
    'gnc 我做夢都想做的事便是一把火燒了驗處所的蠱蟲，若能一呼百應，我必第一個放這把火。',
    'gnc 我入宮以後，雖不再能舞刀弄槍，但馬步拳法也未曾荒廢，正適合做跟太監們正面相對的先鋒。', 
    'hide character gnc',
    'show character gna smile',
    'gna 幾位妹妹之勇，甚于我平生所見男兒……我雖文武不通，但會做幾件衣裳，',
    'gna 若是往宮磚上貼紙，我看還需在夜裡，最好穿夜行衣，做夜行衣這差事便歸我吧。',
    'i 好，好，好！能認識幾位元姐姐是我入宮最大的幸事！',
    'i 若想成事，可能還需要多點人手，我來結識其他姐妹，擇可信任之人一同謀事。',
    'show character gna normal',
    'gna 妹妹的語氣，總像篤定太監們會造出非處一般？',
    'i （當然篤定，畢竟活過一輩子……）',
    'i （笑）許是我相信太陽底下無新事，該發生的必然會來吧。',
    
    //劇情：籌備->驗處頻率提高
    //場景：宮牆柳-春（bg2-willow-spring）->宮牆柳-冬（bg2-willow-winter）
    //人物： 宮女d
    'play sound bird',
    'show scene willow_spring with fadeIn duration 3s',
    's 那日過後，你們各自忙於結交、制衣、擬文、習武。',
    'show scene willow_winter with fadeIn duration 3s',
    's 當驗處週期即將縮短到兩日一次時，你已經籠絡了二十余名姐妹。',
    's 她們分別加入你們四個人的分工。時機日漸成熟，只欠那股一定會來的東風。',
    'show character tj1 normal',
    's 昌貴最終還是如前世一般趾高氣昂地出現了，宣佈了你們的命運。',
    'hide character tj1',
    's 可是這一回，你要這命握在自己手中。',
    'show character gnd cry',
    'gnd 只是，要將我打入冷宮的決議，恐怕難以改變……',
    'i （握住她的手，低聲）姐姐，我們會去救你的，一定會。',
    'show character gnd scared',
    's 她眼下仍掛著淚，但還是在你堅定的眼神中怔愣地點了點頭。',

    //劇情：夜晚貼字
    //人物： 三宮女
    //【CG1】夜行衣宮妃在宮牆上貼白紙朱字
    'show scene #000000',
    's 是夜，你們穿上夜行衣假裝打更人，在宮牆貼上已經準備好的白底朱字的紙張，',
    's 紙上字字所書，皆是你們對蠱蟲驗處的質問，',
    'centered',
    'show image night_posters with fadeIn duration 3s',
    'centered',
    'gallery unlock E6_cg_night_posters',
    'play sound notification',
    'show message E6_cgunlock_night_posters',
    's “既無男根 何來非處”',
    's “是處非處 賭鬼不知”',
    's 數過的八百三十四塊青磚上貼滿密密麻麻的朱字，',
    'show character gnc innocent',
    'gnc 痛快，真痛快啊！',
    'hide character gnc',
    'show character gnb smile',
    'gnb 這些話我可忍了太久，明日青天白日，定要將它們曬盡！',
    'hide character gnb',
    'show character gna whisper',
    'gna 本以為這輩子只有凋敝的命，算不到還能這般活得像個人。',
    's 你忽然感到心頭濃厚的鬱憤一下被劃破，終於化解開來。',
    'i 姐姐莫哭，朱字定能破了這青磚壘起的宮牆。',

    //劇情：火燒蠱蟲
    //人物： 三宮女（gna gnb gnc）+gnd,大太監（tj1），宮女群像
    //藤原：在CG之前是否需要背景？還是直接黑屏？
    'show scene #000000',
    's 次日，姐妹們在數磚去太監所的路上看到這些朱字。',
    's “是啊，後宮裡連有根的男人都沒有，那位姐妹是如何能失清白？”',
    's “你們看這張紙上，說小德子在宮外賭坊被砍手的事……”',
    's “他們居然拿著驗處攢下的錢過好日子，是處非處又全靠他們一張嘴……不出現非處才怪。”',
    's “我們入宮不是為了給這些奴才當謀財器物的！”',
    's “不公道大行其是，誰敢說下一個被扣上非處的是誰？”',
    's “時時刻刻要提心吊膽，無休無止……”',
    's “沒准之後會更頻繁，兩日一回也滿足不了他們的胃口！”',
    's “沒有王法……竟然如此明目張膽欺君麼！”',
    's 積壓已久的不滿被挑明，曬在了煌煌天日之下。',
    //【CG2】宮妃起義
    'centered',
    'show image riot with fadeIn duration 3s',
    'centered',
    'gallery unlock E6_cg_riot',
    'play sound notification',
    'show message E6_cgunlock_riot',
    'show character gnc normal',
    'gnc 這般窩囊的日子我不要過一輩子，這勞什子蠱蟲不如燒了去！',
    'hide character gnc',
    'i 燒蠱蟲！',
    's 一同謀事的姐妹們跟著你喊："燒蠱蟲！"',
    'show scene #000000',
    's 其他姐妹們紛紛叩磚而起，在你們的帶領下湧入太監所。',
    's 太監們驚慌地看著你們憤怒的臉。',
    //【CG3】火燒蠱蟲
    'centered',
    'show image set_fire with fadeIn duration 3s',
    'centered',
    'gallery unlock E6_cg_set_fire',
    'play sound notification',
    'show message E6_cgunlock_set_fire',
    'tj2 做——做甚——',
    'show character gnb smile',
    'gnb 呦，今日公公終於抬眼看人啦？',
    'hide character gnb',
    'show character gna smile',
    'gna 確實是頭一回見著各位完全睜開的眼睛哩！',
    'hide character gna',
    'show character gnc normal',
    'gnc （擒拿住領頭的驗處公公）蠱蟲在哪？',
    'hide character gnc',
    'show character tj1 normal',
    'tj1 哎呦，你們——你們是反了天了。',
    'hide character tj1',
    'show character gnb smile',
    'gnb 大膽奴才，你竟敢說自己是天麼！',
    'hide character gnb',
    'i 煉蠱的密室在哪裡？坦白從寬，抗拒從嚴！',
    'show character tj1 normal',
    'tj1 放肆，你們這群賊子，這事鬧到朝上，十個腦袋也不夠你們掉的——',
    'hide character tj1',
    'show character tj3 normal',
    'tj3 密室在這邊，隨我來。',
    'hide character tj3',
    'show character gna normal',
    'gna ？？？',
    'hide character gna',
    'show character gnb normal',
    'gnb ？？？',
    'hide character gnb',
    'show character gnc normal',
    'gnc ？？？',
    'hide character gnc',
    'i （怎麼回事？這小太監臨陣倒戈了？）',
    'show character tj1 normal',
    'tj1 ——你！',
    'tj1 你這個吃裡扒外的東西！你竟敢和這群賤人私通，裡應外合！',
    'i 咦！鄭公公，我原以為驗處閣諸位是如膠似漆，沒曾想你們竟貌合心離嘛？',
    'hide character tj1',
    'show character gnc titter',
    'gnc 姐妹們跟上！來個人按住昌貴，我們跟著小太監去把那密室端了！',
    'hide character gnc',
    'show character gnb think',
    'gnb 慢著！沒準兒這他是為了保住昌貴，要調虎離山，把我們引到別處好讓昌貴趁機開溜！',
    'hide character gnb',
    'show character gnc normal',
    'gnc ……好險，差點著了他的道！',
    'hide character gnc',
    'show character tj3 normal',
    'tj3 什麼？我保著他做甚，好叫我們驗處官以後繼續喝西北風去呀？',
    'hide character tj3',
    's 四周傳來一片應合聲。',
    's “狗昌貴還錢！”',
    's “還我血汗錢！”',
    'i 難道昌貴的乾兒子不是一個個中飽私囊，整日在外逍遙快活嗎？',
    'show character tj3 normal',
    'tj3 噢（白眼），驗處的確是肥缺啊，不過你看看那錢都進了誰的荷包？都叫昌貴和乾兒子們拿去了！',
    'tj3 我們每天飲風餐露，已經修煉得仙風道骨了，那的確是將要羽化登仙，前往逍遙之境啦！',
    'hide character tj3',
    'show character tj1 normal',
    'tj1 公家人自然是要有苦其心志、勞其筋骨、餓其體膚的意志，才能擔得起維持秩序的重任哩……是不是，小德子？',
    'hide character tj1',
    'show character gna smile',
    'gna 鄭公公，小德子已經跑遠咯。',
    'hide character gna',
    'show character tj3 normal',
    'tj3 不愧是外勤出得多，到了溜的時候跑得比耗子還利索。',
    'tj3 我們老實本分的驗處官呢，一開始七天驗一次尚還耐得住，後來變成兩天驗一次，一天一次，一天兩次，',
    'tj3 辛勞的時間一日賽一日多，忙得連飯也吃不上了。哈哈，正好吃飯的錢也沒有！',
    'tj3 我們一個個終日憔悴操勞，可是銅板卻一個也沒有漲！',
    'hide character tj3',
    'show character gnc normal',
    'gnc 原來不只是我們宮女苦驗處久矣！',
    'hide character gnc',
    's 四周的呼喊愈發高漲。',
    's “還我血汗錢！”',
    's “還我血汗錢！”',
    'show character tj3 normal',
    'tj3 同儕們喲，這驗處閣是待不下去了，哪怕直接上街要飯也賽過在這發爛發臭！我們走，去密室！',
    'hide character tj3',
    'show character gnc titter',
    'gnc （從後廚拿來點燃的柴分發給你們）今日這火，為我們自己而放，為所有苦於驗處的人而放！',
    'hide character gnc',
    's “燒蠱蟲！燒蠱蟲！”',
    's 宮女和太監們的聲音混合在一起，',
    's 蠱蟲們被一燒而盡。',
    's 隨後你們沖入冷宮，昨日被判為非處的宮女熱淚漣漣。',
    'show character gnd cry',
    'i 姐姐莫怕，我們同你一道。',
    'hide character gnd',
    's 你們一齊在冷宮住下。',

    //劇情：前朝撤出太監
    //場景：宮牆柳-冬（bg2-willow-winter）
    'show scene willow_winter with fadeIn duration 3s',
    's 次日，代皇帝理政的前朝得知此事。',
    's 他們並不關心你們與太監的鬥爭，',
    's 唯獨在乎欽天監所奏，後宮走水乃不祥之兆。',
    's 太監所作為走水處被取締，大臣們唯恐這不詳滅得不夠徹底，',
    's 於是太監也被撤出了後宮。',
    's 而後宮皆為冷宮有損皇帝聲譽，畢竟相當於直言後宮形同虛設。',
    's 在不言的默契下，冷宮的姐妹被你們救出。',
    //劇情：後宮自治
    //場景：宮牆柳樹下，三宮妃自治立繪+其他的宮妃模糊剪影群像（bg5）
    'show scene willow_spring with fadeIn duration 3s',
    's 連沒根的男人也從後宮中消失之後，你們便開始了女官自治。',
    'show character gna after',
    's 你張羅姐妹們讀書寫詩，',
    'hide character gna',
    'show character gnb after',
    's 耕種開荒，',
    'hide character gnb',
    'show character gnc after',
    's 練兵習武。',
    'show scene farm with fadeIn duration 3s',
    'play sound bird',
    's 這日用過膳後，你們眾姐妹又聚在一處。',
    'show character gna after',
    'i 姐姐院裡的桃花開得真好，昨日可有采露煮茶?',
    'gna 上回詩會的集子尚沒編完，哪裡顧得上煮茶。',
    'hide character gna',
    'show character gnb after',
    'gnb 天天念著桃花，你莫不是饞桃花糕了吧！',
    'hide character gnb',
    'show character gna after',
    'gna 說不準呢！妹妹上回寫的詩可是句句不離吃食。',
    'i 大俗大雅，大俗大雅，韻對了就行，嘿嘿。',
    'hide character gna',
    'show character gnb after',
    'gnb 你最近寫詩確有長進，晚上來我這吃頓好的。',
    'hide character gnb',
    'show character gnc after',
    'gnc 你又在哪開了塊地？',
    'hide character gnc',
    'show character gnb after',
    'gnb 沒多大，就原來太監所後面那塊園子。',
    'hide character gnb',
    'show character gnc after',
    'gnc 呦，你倒是不嫌晦氣。',
    'i 園子哪兒有晦氣不晦氣之說！',
    'i 晦氣的都不在了，地又有何錯？',
    'gnc 哇，學文學出長進啦？明日我來查查你的拳法如何？',
    'i ……啊，姐姐們，想起籌算的功課還沒檢查，我先行告辭了！',
    'hide character gnc',
    'show scene #000000',
    

    //劇情：搶回出宮權
    //場景：宮牆柳-春（bg2-willow-spring）與宮牆柳-冬（bg2-willow-winter）交錯淡入淡出，作為時間流逝效果
    'centered',
    'show scene willow_winter with fadeIn duration 2.5s',
    'centered',
    'show scene willow_spring with fadeIn duration 2.5s',
    'centered',
    'show scene willow_winter with fadeIn duration 2.5s',
    'centered',
    's 又過了五年，老皇帝終於薨逝。',
    's 有大臣提起你們當年縱火之事，意在要你們殉葬。',
    's 你們提劍的提劍，拿書的拿書，闖上前朝，',
    's 文武雙下，舌戰群儒，劍指四方，',
    's 在朝還有前來弔唁的鄰國使臣，強迫殉葬之事被捅破，',
    's 若是依舊執行難免有損帝國體面，你們因而搶回出宮養老之權。',

    //劇情：創辦女子書院
    //場景：讀書區和室外習武區，老年版三宮妃立繪+年輕的女學生們（bg6）
    'show scene #000000',
    's ……',
    'show scene school with fadeIn duration 3s',
    's 出宮後，早在被家族送進宮時就已經被放棄的你們無家可歸，',
    's 於是你們便一起買下一個院子，開辦女子書院，教女子讀書習武，',
    's 至你百歲死時，它的影響已經非常深遠。',
    'play sound notification',
    'show message Ending-E6true',
    'centered',
    'play music good_ending',
    'show scene #000000',
    'centered',
    // TRUE ENDING製作名單
    'centered <p>製作名單</p><p>PRODUCER: レイワジダイ株式會社</p><p>STORY: 千葉ハルキ, 澱川ニンニク, おおさくゆめ</p><p>GAME ENGINE: Monogatari, Apache Cordova</p><p>PROGRAM: 2號機, 千野キノ, 鳥山 湖辺斎, 太作夢</p><p>GRAPHICS: Kohensai Toriyama, 岡田茂のAI, にんにく</p>',
    'centered <p>MUSIC & SFX: 渡辺徹, ガレージバンド, Miho Araki, Kino Chino</p><p>TESTING: オカダの友, ヨウイチ, Haruki Chiba, 東野澪子</p><p>PROMOTION: 津門ゆうじ</p><p>EATING WATERMELONS: 無敵ドラゴン戦神, ユリシス</p><p>SPECIAL THANKS: 佐藤アオイ, savage</p>',
    'centered',
    'centered 更多離奇詭譎的平行世界，',
    'show scene E1_bus with fadeIn duration 3s',
    'centered',
    'show scene #000000',
    'centered 更加險象環生的生存挑戰，',
    'show scene E3_factory with fadeIn duration 3s',
    'centered',
    'show scene #000000',
    'centered 盡在錄奇志異的東京求生記！',
    'centered <p>感謝您的遊玩！</p><p>東京求生記·完整版及dlc正在同步製作中，敬請期待！</p>',
    'centered',
    'end',
    /*
    藤原：此處未設置節點跳轉；需要之後補。
    此處自動跳轉到本體線核酸監督【不】沖塔劇情（所有選項開放）（需要在核酸線的開頭定義環境變數？）
    核酸線還沒有轉寫，等核酸線設完再設置跳轉節點
    */    
])


