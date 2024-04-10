/**
*索引：
*   s = 旁白 , i = 我 , gna-fz = 宫女a , gnb-fz = 宫女b , gnc-fz = 宫女c
*   tj1-fz = 大太监昌贵，gnd = 宫女d
**/

//繁体中文

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
    //三宮女（gna-fz gnb-fz gnc）
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
    'show character gna-fz normal',
    'gna-fz 哎呀，妹妹，都不知道一陣兒不見，你竟然過得這樣辛苦……可心疼死我了。',
    'hide character gna-fz',
    'show character gnc-fz normal',
    'gnc-fz 凍得發昏？他們是克扣了你的炭火麼？',
    'hide character gnc-fz',
    'show character gnb-fz normal',
    'gnb-fz 可不就是！你們沒有看太監所前面貼著的黑榜嗎？',
    'show character gnb-fz think',
    'gnb-fz 9527妹妹已經上榜好久了。入夏前就有你的名字，想必你當時也少了冰吧。',
    'i ……啊，是因為我沒有去驗處麼？',
    'hide character gnb-fz',
    'show character gna-fz whisper',
    'gna-fz 想來應該就是了。這些人竟然這樣對待我們妹妹！真是苦了你了……',
    'hide character gna-fz',
    'i （原來如此……只要我乖乖去驗處，沒准我還能求他們恢復我的俸祿，或許也不至於每晚都被凍醒……）',
    'i （可是……就這樣認錯嗎？）',
    'show character gnc-fz normal',
    'gnc-fz 妹妹莫擔心，我們給你想法子。',
    'hide character gnc-fz',
    'show character gnb-fz normal',
    'gnb-fz 沒錯，妹妹你行我們不敢行之事，於我們實在是莫大的安慰。',
    'gnb-fz 這點小事，我們一定想法子給你解決。',
    'hide character gnb-fz',
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
    //人物：三宮女（gna-fz gnb-fz gnc）
    'show scene farm with fadeIn duration 3s',
    'play sound cicada',
    's 時間流轉，又是一年夏，姐妹們來你種的葡萄藤下納涼。',
    'show character gna-fz normal',
    'gna-fz 妹妹，你這一日日的……何苦這般，過得像粗鄙下人？',
    'gna-fz 種地制炭的功夫，都夠你走去驗處多少回啦？',
    'hide character gna-fz',
    'i （笑）可種出來的是一粒粒是糧食，驗出來的一次次卻是昌貴乾兒子們的賭資。',
    'i 不過是不願意陪他們唱這齣戲罷了，驗處閣那個戲臺子我不愛登，所以自個另搭了一個，葡萄總比太監的臉好看，是吧姐姐？',
    'show character gnb-fz smile',
    'gnb-fz 那可不，葡萄有紅有紫，太監臉可就非青即白啦！',
    's 姐妹們一同大笑。',
    'hide character gnb-fz',
    'show character gnc-fz titter',
    'gnc-fz 妹妹，那你這是非處居士的號又為何意？',
    'hide character gnc-fz',
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
    'show message Ending-fblbhz-fz',
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
    //人物： 三宮女（gna-fz gnb-fz gnc）
    'play sound bird',
    'show scene farm with fadeIn duration 3s',
    's 這日午膳過後，你與眾姐妹聚在一處宮苑裡。',
    'show character gna-fz normal',
    'i 姐姐院裡的桃花開得真好，昨日可有采露煮茶？',
    'gna-fz 我倒是想，可你知道，昨日適逢驗處，我這兒離驗處閣又是最遠……',
    'gna-fz 每回驗處，來去都累得不行，哪來閒情煮茶呀。',
    'i 唉……這倒是，驗處費時費力，來去和列隊都要時間，',
    'i 有幾回日頭大了，我看有些底子差的姐妹站得臉色都白了。',
    'i 我底子不算差，倒是受得住，但偏偏看不得太監那張臉，心裡堵得慌。',
    'hide character gna-fz',
    'show character gnb-fz normal',
    'gnb-fz 可不是！個個爭當昌貴的狗，背地裡賭錢鬥雞樣樣在行。',
    'hide character gnb-fz',
    'show character gna-fz normal',
    'gna-fz 真的？妹妹你從哪知道的消息……',
    'hide character gna-fz',
    'show character gnb-fz normal',
    'gnb-fz 小德子有回使喚手下人替他往外面賭場存錢，被一個姐妹聽到的，不會有假。',
    'hide character gnb-fz',
    'show character gnc-fz normal',
    'gnc-fz 拿的怕就是驗處得的賞錢吧，自打驗處以來，小德子的腰杆都比以前直。',
    'hide character gnc-fz',
    'show character gnb-fz normal',
    'gnb-fz 昌貴最寵的乾兒子，分到的驗處名額最多也不奇怪……',
    'gnb-fz 這宮裡怕只有他們從驗處中得好處，越驗地位越高，成了主子。',
    'hide character gnb-fz',
    'show character gnc-fz normal',
    'gnc-fz （拍桌）想到小德子那張不陰不陽的臉我就難受！',
    'i 誰不是呢姐姐！真想當面問問他擺的什麼架子！',
    'hide character gnc-fz',
    'show character gna-fz normal',
    'gna-fz 妹妹們冷靜……我們這些不承恩寵的宮妃，過日子花的用的全憑太監們一句話，可不能撕破臉。',
    'hide character gna-fz',
    'show character gnc-fz normal',
    'gnc-fz 姐姐說得是沒錯，但是就任他們如此作威作福，我也實在不能甘心。',
    'i 僅憑我們確是螳臂當車，但後宮姐妹不止三千，太監才區區幾百……',
    'hide character gnc-fz',
    'show character gnb-fz normal',
    'gnb-fz 你是說——',
    'hide character gnb-fz',
    'show character gnc-fz titter',
    'gnc-fz 對呀！後宮姐妹苦驗處久矣，何不拉上她們一道？',
    'hide character gnc-fz',
    'show character gnb-fz think',
    'gnb-fz 可我相熟的不過你們三人，旁人也信不過，若是被出賣了如何是好？',
    'i 姐姐莫憂心，我有個法子，不必拉上許多人，也不必現身——',
    'hide character gnb-fz',
    'show character gna-fz normal',
    'gna-fz 等等，妹妹們，這就決意要非行事不可了嗎？',
    'i 姐姐，不是我們決意，我怕太監們將會逼得我們不得不行事。',
    'gna-fz 此話怎講？',
    'i 唉，但願是我杞人憂天……今日聽姐姐們說太監賭錢之事，我總是不安。',
    'i 他們把驗處當作謀財之手段，處與非處全靠勞什子蠱蟲，而蠱蟲又全出自他們之手，',
    'i 會不會……為了驗得更多——造出非處呢？',
    'hide character gna-fz',
    'show character gnc-fz normal',
    'gnc-fz （站起身）他們敢！這可是欺君大罪，昌貴那顆腦袋怎麼敢擔！',
    'gnc-fz 況且後宮連男根都沒有，這謊撒得不可笑麼？',
    'hide character gnc-fz',
    'i 但願他不敢，可要是他敢，我們是決計不能再忍下去的。',
    'i 七日一回也許還勉強可受，可若是兩日一回，一日一回，一日幾回呢？',
    'i 姐姐們院裡的桃花，案上的古籍，手中的劍法，難道都要因為驗處荒廢了麼？',
    'show character gnb-fz normal',
    'gnb-fz ……我是決計無法忍那般日子的……',
    'hide character gnb-fz',
    'show character gna-fz normal',
    'gna-fz 話雖如此，可畢竟還沒到那般境地……',
    'i 我也希望那般境地永不會到，但若是到了，也是我們的時機。',
    'i ……姐姐，若是太監們造出非處，你會同我們一道麼？',
    'show character gna-fz whisper with fadeIn',
    'gna-fz ……我雖小心，但也不是逆來順受的奴才，那般欺壓是忍不下的。',
    'i 是了，其他姐妹想必也不乏姐姐這般想法，所以屆時便是群情激憤，一呼百應之機。',
    'hide character gna-fz',
    'show character gnc-fz normal',
    'gnc-fz 妹妹有法子？',
    'i 宮裡姐妹雖住在四面八方，但驗處所門前那條宮道卻是必經之路。',
    'hide character gnc-fz',
    'show character gnb-fz think',
    'gnb-fz 不錯，那條路上的磚都快印我腦袋裡了。',
    'i 若在造出非處，群情激憤之際，驗處路上見到怒駡他們的話呢？',
    'show character gnb-fz normal',
    'gnb-fz 這字還得用朱筆寫，讓這青磚染血，我略懂書法文墨，讓我來吧。',
    'hide character gnb-fz',
    'show character gnc-fz normal',
    'gnc-fz 好！妹妹，你可想好一呼百應之後如何？',
    'i 姐姐有何計策？',
    'show character gnc-fz titter',
    'gnc-fz 我做夢都想做的事便是一把火燒了驗處所的蠱蟲，若能一呼百應，我必第一個放這把火。',
    'gnc-fz 我入宮以後，雖不再能舞刀弄槍，但馬步拳法也未曾荒廢，正適合做跟太監們正面相對的先鋒。', 
    'hide character gnc-fz',
    'show character gna-fz smile',
    'gna-fz 幾位妹妹之勇，甚于我平生所見男兒……我雖文武不通，但會做幾件衣裳，',
    'gna-fz 若是往宮磚上貼紙，我看還需在夜裡，最好穿夜行衣，做夜行衣這差事便歸我吧。',
    'i 好，好，好！能認識幾位元姐姐是我入宮最大的幸事！',
    'i 若想成事，可能還需要多點人手，我來結識其他姐妹，擇可信任之人一同謀事。',
    'show character gna-fz normal',
    'gna-fz 妹妹的語氣，總像篤定太監們會造出非處一般？',
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
    'show character tj1-fz normal',
    's 昌貴最終還是如前世一般趾高氣昂地出現了，宣佈了你們的命運。',
    'hide character tj1-fz',
    's 可是這一回，你要這命握在自己手中。',
    'show character gnd-fz cry',
    'gnd-fz 只是，要將我打入冷宮的決議，恐怕難以改變……',
    'i （握住她的手，低聲）姐姐，我們會去救你的，一定會。',
    'show character gnd-fz scared',
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
    'show message E6_cgunlock_night_posters-fz',
    's “既無男根 何來非處”',
    's “是處非處 賭鬼不知”',
    's 數過的八百三十四塊青磚上貼滿密密麻麻的朱字，',
    'show character gnc-fz innocent',
    'gnc-fz 痛快，真痛快啊！',
    'hide character gnc-fz',
    'show character gnb-fz smile',
    'gnb-fz 這些話我可忍了太久，明日青天白日，定要將它們曬盡！',
    'hide character gnb-fz',
    'show character gna-fz whisper',
    'gna-fz 本以為這輩子只有凋敝的命，算不到還能這般活得像個人。',
    's 你忽然感到心頭濃厚的鬱憤一下被劃破，終於化解開來。',
    'i 姐姐莫哭，朱字定能破了這青磚壘起的宮牆。',

    //劇情：火燒蠱蟲
    //人物： 三宮女（gna-fz gnb-fz gnc）+gnd-fz,大太監（tj1），宮女群像
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
    'show message E6_cgunlock_riot-fz',
    'show character gnc-fz normal',
    'gnc-fz 這般窩囊的日子我不要過一輩子，這勞什子蠱蟲不如燒了去！',
    'hide character gnc-fz',
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
    'show message E6_cgunlock_set_fire-fz',
    'tj2-fz 做——做甚——',
    'show character gnb-fz smile',
    'gnb-fz 呦，今日公公終於抬眼看人啦？',
    'hide character gnb-fz',
    'show character gna-fz smile',
    'gna-fz 確實是頭一回見著各位完全睜開的眼睛哩！',
    'hide character gna-fz',
    'show character gnc-fz normal',
    'gnc-fz （擒拿住領頭的驗處公公）蠱蟲在哪？',
    'hide character gnc-fz',
    'show character tj1-fz normal',
    'tj1-fz 哎呦，你們——你們是反了天了。',
    'hide character tj1-fz',
    'show character gnb-fz smile',
    'gnb-fz 大膽奴才，你竟敢說自己是天麼！',
    'hide character gnb-fz',
    'i 煉蠱的密室在哪裡？坦白從寬，抗拒從嚴！',
    'show character tj1-fz normal',
    'tj1-fz 放肆，你們這群賊子，這事鬧到朝上，十個腦袋也不夠你們掉的——',
    'hide character tj1-fz',
    'show character tj3-fz normal',
    'tj3-fz 密室在這邊，隨我來。',
    'hide character tj3-fz',
    'show character gna-fz normal',
    'gna-fz ？？？',
    'hide character gna-fz',
    'show character gnb-fz normal',
    'gnb-fz ？？？',
    'hide character gnb-fz',
    'show character gnc-fz normal',
    'gnc-fz ？？？',
    'hide character gnc-fz',
    'i （怎麼回事？這小太監臨陣倒戈了？）',
    'show character tj1-fz normal',
    'tj1-fz ——你！',
    'tj1-fz 你這個吃裡扒外的東西！你竟敢和這群賤人私通，裡應外合！',
    'i 咦！鄭公公，我原以為驗處閣諸位是如膠似漆，沒曾想你們竟貌合心離嘛？',
    'hide character tj1-fz',
    'show character gnc-fz titter',
    'gnc-fz 姐妹們跟上！來個人按住昌貴，我們跟著小太監去把那密室端了！',
    'hide character gnc-fz',
    'show character gnb-fz think',
    'gnb-fz 慢著！沒準兒這他是為了保住昌貴，要調虎離山，把我們引到別處好讓昌貴趁機開溜！',
    'hide character gnb-fz',
    'show character gnc-fz normal',
    'gnc-fz ……好險，差點著了他的道！',
    'hide character gnc-fz',
    'show character tj3-fz normal',
    'tj3-fz 什麼？我保著他做甚，好叫我們驗處官以後繼續喝西北風去呀？',
    'hide character tj3-fz',
    's 四周傳來一片應合聲。',
    's “狗昌貴還錢！”',
    's “還我血汗錢！”',
    'i 難道昌貴的乾兒子不是一個個中飽私囊，整日在外逍遙快活嗎？',
    'show character tj3-fz normal',
    'tj3-fz 噢（白眼），驗處的確是肥缺啊，不過你看看那錢都進了誰的荷包？都叫昌貴和乾兒子們拿去了！',
    'tj3-fz 我們每天飲風餐露，已經修煉得仙風道骨了，那的確是將要羽化登仙，前往逍遙之境啦！',
    'hide character tj3-fz',
    'show character tj1-fz normal',
    'tj1-fz 公家人自然是要有苦其心志、勞其筋骨、餓其體膚的意志，才能擔得起維持秩序的重任哩……是不是，小德子？',
    'hide character tj1-fz',
    'show character gna-fz smile',
    'gna-fz 鄭公公，小德子已經跑遠咯。',
    'hide character gna-fz',
    'show character tj3-fz normal',
    'tj3-fz 不愧是外勤出得多，到了溜的時候跑得比耗子還利索。',
    'tj3-fz 我們老實本分的驗處官呢，一開始七天驗一次尚還耐得住，後來變成兩天驗一次，一天一次，一天兩次，',
    'tj3-fz 辛勞的時間一日賽一日多，忙得連飯也吃不上了。哈哈，正好吃飯的錢也沒有！',
    'tj3-fz 我們一個個終日憔悴操勞，可是銅板卻一個也沒有漲！',
    'hide character tj3-fz',
    'show character gnc-fz normal',
    'gnc-fz 原來不只是我們宮女苦驗處久矣！',
    'hide character gnc-fz',
    's 四周的呼喊愈發高漲。',
    's “還我血汗錢！”',
    's “還我血汗錢！”',
    'show character tj3-fz normal',
    'tj3-fz 同儕們喲，這驗處閣是待不下去了，哪怕直接上街要飯也賽過在這發爛發臭！我們走，去密室！',
    'hide character tj3-fz',
    'show character gnc-fz titter',
    'gnc-fz （從後廚拿來點燃的柴分發給你們）今日這火，為我們自己而放，為所有苦於驗處的人而放！',
    'hide character gnc-fz',
    's “燒蠱蟲！燒蠱蟲！”',
    's 宮女和太監們的聲音混合在一起，',
    's 蠱蟲們被一燒而盡。',
    's 隨後你們沖入冷宮，昨日被判為非處的宮女熱淚漣漣。',
    'show character gnd-fz cry',
    'i 姐姐莫怕，我們同你一道。',
    'hide character gnd-fz',
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
    'show character gna-fz after',
    's 你張羅姐妹們讀書寫詩，',
    'hide character gna-fz',
    'show character gnb-fz after',
    's 耕種開荒，',
    'hide character gnb-fz',
    'show character gnc-fz after',
    's 練兵習武。',
    'show scene farm with fadeIn duration 3s',
    'play sound bird',
    's 這日用過膳後，你們眾姐妹又聚在一處。',
    'show character gna-fz after',
    'i 姐姐院裡的桃花開得真好，昨日可有采露煮茶?',
    'gna-fz 上回詩會的集子尚沒編完，哪裡顧得上煮茶。',
    'hide character gna-fz',
    'show character gnb-fz after',
    'gnb-fz 天天念著桃花，你莫不是饞桃花糕了吧！',
    'hide character gnb-fz',
    'show character gna-fz after',
    'gna-fz 說不準呢！妹妹上回寫的詩可是句句不離吃食。',
    'i 大俗大雅，大俗大雅，韻對了就行，嘿嘿。',
    'hide character gna-fz',
    'show character gnb-fz after',
    'gnb-fz 你最近寫詩確有長進，晚上來我這吃頓好的。',
    'hide character gnb-fz',
    'show character gnc-fz after',
    'gnc-fz 你又在哪開了塊地？',
    'hide character gnc-fz',
    'show character gnb-fz after',
    'gnb-fz 沒多大，就原來太監所後面那塊園子。',
    'hide character gnb-fz',
    'show character gnc-fz after',
    'gnc-fz 呦，你倒是不嫌晦氣。',
    'i 園子哪兒有晦氣不晦氣之說！',
    'i 晦氣的都不在了，地又有何錯？',
    'gnc-fz 哇，學文學出長進啦？明日我來查查你的拳法如何？',
    'i ……啊，姐姐們，想起籌算的功課還沒檢查，我先行告辭了！',
    'hide character gnc-fz',
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
    'show message Ending-E6true-fz',
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


