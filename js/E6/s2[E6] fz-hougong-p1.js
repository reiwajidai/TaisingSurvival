/**
*   索引：
*   s = 旁白 , i = 我 , gna-fz = 宫女a , gnb-fz = 宫女b , gnc-fz = 宫女c
*   tj1-fz = 大太监昌贵, tj2-fz-fz = 验处太监, gnd-fz = 宫女d
**/

//繁体中文

// Define the messages used in the game
monogatari.action ('message').messages ({
  // 結局彈窗
  'Ending-E6first-fz': {
    title: '結局：宮牆綠柳葬紅顏',
    subtitle: '咽不下玉粒金蓴噎滿喉，照不見菱花鏡裡形容瘦。',
    body: `
      <p>你在日復一日驗處的更聲中潦草地結束了一生。</p>
      <img src='./assets/gallery/E6_end_brick.png' width="40">

    `
},

  'Ending-cdfz-fz': {
      title: '結局：重蹈覆轍',
      subtitle: '命運給了你第二次機會，但你還是沒能逃出帝國寫給你的終局。',
      body: `
        <p>（如果能再來一次的話……點擊主功能表“故事線”重新從前一節點開始）</p>
        <img src='./assets/gallery/E6_end_brick.png' width="40">

      `
  },

  'Ending-fblbhz-fz': {
    title: '結局：非暴力不合作',
    subtitle: '拒絕是你最後的尊嚴。',
    body: `
      <p>你成功擺脫了繁文縟節的束縛。然而，宮中其餘的姐妹們又命運如何呢？她們並不一定都能如你一般超然物外，最終脫離苦海。</p>
      <p>（如果能再來一次的話……點擊主功能表“故事線”重新從前一節點開始）</p>
      <img src='./assets/gallery/E6_end_hermit.png' width="40">

    `
  },

  'Ending-E6true-fz': {
    title: '結局：火燒蠱蟲',
    subtitle: '野火燒不盡，春風吹又生。',
    body: `
      <p>那宮牆依舊森然矗立，可你們卻在其中建立了一方自由的天地。或許有一天，你們也能夠改變整個帝國的命數。</p>
      <img src='./assets/gallery/E6_end_fire.png' width="40">

    `
  },

  // 畫廊解鎖彈窗
  'E6_cgunlock_night_posters-fz': {
    title: '解鎖畫廊：青瓦牆，朱字紙',
    subtitle: '',
    body: `
      <p>即便是最不起眼的青色宮牆也目睹過最淒切的哀傷。而今夜，你們決定以血和淚的控訴裝點它。</p>

    `
  },

  'E6_cgunlock_riot-fz': {
    title: '解鎖畫廊：宮妃起義',
    subtitle: '',
    body: `
      <p>你們的聲音積沙成塔，聚水為流，最終匯成一句話：起來，不願受壓迫的姐妹們！</p>

    `
  },

  'E6_cgunlock_set_fire-fz': {
    title: '解鎖畫廊：火燒蠱蟲',
    subtitle: '',
    body: `
      <p>大火燒盡的是太監所的貞潔字紙，點燃的卻是你們渴望的心。</p>

    `
  },

}),


//Define the characters.
monogatari.characters ({
  'gna-fz': {
    name: '宮女a',
    color: '#FF6699',
    directory: 'E6-gongnv',
    sprites:{
      'normal':'fz-gna_normal.png',
      'smile':'fz-gna_smile.png',
      'frightened':'fz-gna_frightened.png',
      'whisper':'fz-gna_whisper.png',
      'after':'fz-gna_after.png',
      'hand_green': 'fz-gna_hand_green.png',
      'hand_black': 'fz-gna_hand_black.png',
      
    },
  },
  'gnb-fz': {
    name: '宮女b',
    color: '#FF3366',
    directory: 'E6-gongnv',
    sprites:{
      'normal':'fz-gnb_normal.png',
      'smile':'fz-gnb_smile.png',
      'think':'fz-gnb_think.png',
      'after':'fz-gnb_after.png',
    }
  },
  'gnc-fz': {
    name: '宮女c',
    color: '#FF99CC',
    directory: 'E6-gongnv',
    sprites:{
      'normal':'fz-gnc_normal.png',
      'titter':'fz-gnc_titter.png',
      'innocent':'fz-gnc_innocent.png',
      'after':'fz-gnc_after.png',
    }
  },
  'gnd-fz': {
    name: '宮女d',
    color: '#FF99FF',
    directory: 'E6-gongnv',
    sprites:{
      'cry':'fz-gnd_cry.png',
      'scared':'fz-gnd_scared.png',
    }
  },
  'tj1-fz': {
    name: '大太監昌貴',
    color: '#33FF33',
    directory: 'E6-gongnv',
    sprites:{
      'normal':'fz-tj1.png',
    }
  },
  'tj2-fz': {
    name: '驗處太監',
    color: '#33FF33',
    directory: 'E6-gongnv',
    sprites:{
      'normal':'fz-tj2.png',
    }
  },

  'tj3-fz': {
    name: '小太監',
    color: '#33FF33',
    directory: 'E6-gongnv',
    sprites:{
      'normal':'fz-tj3.png',
    }
  },
})


/**
* ====================================
*【E60-BE】E6-0劇情如下
* ====================================
**/
monogatari.label('E60-BE', '繁體中文', [
  /* 's 等你回過神來，發現伸在面前的不是咽拭子，而是一條白色的蠱蟲。',
  */
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

    // 文字方塊效果
    {'Function':{
      'Apply': function () {
        setTextBoxCSS(textBoxDefault);
      },

      'Reverse': function () {
        setTextBoxCSS(textBoxDefault);
      }   
    }},
    // 玩家姓名設定
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

    // 解鎖世界線
    {'Function':{
      'Apply':function(){
        unlock_level('E60-BE');
      },
      'Reverse':function(){
        lock_level('E60-BE')
      },
    }},
    'stop music',
    'show scene #000000',
    // 正式版劇情暫時改為注釋
    /* 's 不知道為什麼，你最近幾天做完核酸以後，喉嚨每次都感覺有點不舒服，嗓子幹幹的，總想要咳嗽。',
    's 從上一次做完核酸到下一次核酸之前，乾咳的衝動有衰減趨勢，然而每次核酸又會激發新的衝動，於是它的函數圖像便呈現出詭異的週期性。',
    's 這天，你又照常來到核酸亭，正仰頭瞥著伸向你喉嚨的咽拭子，忽然突發奇想。',
    'i 也許做核酸其實是在接種某種東西呢？',
    'i 它在我的喉嚨寄生，接著死掉，直到下一次接種新的進來。',
    'i 乾咳的衝動，也許是身體本能的排異反應？',
    'show scene #FFFFFF with fadeIn duration 7s',
    's 還沒來得及嘲笑自己的被害妄想症，你的眼前忽然湧現出白茫茫的光團。',
    's 光團越來越大，吞沒世界，你眼睜睜看著所有事物扭成一束光——',
    's ——電光火石之間，新的世界鋪陳開來。', */
    // 先行版劇情開場
    'show scene laptop with fadeIn duration 3s',
    'play sound bird',
    's 某個溫暖的午後，你百無聊賴地打開筆記型電腦，盯著文檔中閃爍的游標發呆。',
    'i 寫了半天還只有300字……',
    'i 天氣這麼好，寫什麼無聊文章，就應該出門踏青呀。',
    'show scene #000000',
    's 你這樣想著，不禁閉上雙眼，陷入回憶。',
    'i 還記得去年春天這個時候……',
    'i ……',
    'i ……',
    'i （奇怪，為什麼想不起來去年這時候在做什麼了？）',
    'show scene #FFFFFF with fadeIn duration 7s',
    's 還沒想出個所以然，你的眼前就忽然湧現出白茫茫的光團，',
    's 光團越來越大，吞沒一切，你眼睜睜看著所有事物扭成一束光——',
    's ——電光火石之間，新的世界鋪陳開來。',

    //以下為一周目BE劇情：無反抗-死亡
    //場景1：太監所驗處閣（bg1）
    //人物： tj1-fz = 大太監昌貴
    //bgm：鳥鳴白噪音
    // 文字方塊設計
    {'Function':{
      'Apply': function () {
        setTextBoxCSS(textBoxE6);
      },

      'Reverse': function () {
        setTextBoxCSS(textBoxDefault);
      }   
    }},
    'centered',
    'play sound bird',
    'show scene nucleic with fadeIn duration 3s',
    'show character tj2-fz normal with fadeIn 3s',
    'wait 3000',
    's 等你回過神來，赫然發現面前伸著一條蠕動著的白色蠱蟲。',
    's 還尚未看清它綿軟的頭部和僵直的身軀，它就被強行地送進了你的喉嚨。', 
    'play sound stats_down',      
    'i ！咳咳咳咳',
    'hide character tj2-fz',
    's 一道尖銳的嗓音自頭頂傳來。',
    'show character tj1-fz normal',
    'tj1-fz 又不是頭一回，貴人您還沒習慣哪？',
    's 你抬頭，只見眼前是一張脂粉氣頗重的男性面孔。他戴著很高的帽子，嘴角上挑，上眼瞼耷拉著，輕蔑地看向你。',
    'i 什麼……？',
    's 你開口，驚訝地發現自己發出了一副輕柔到無力的嗓音，一副明顯不屬於你的嗓音。',
    'hide character tj1-fz',
    's 陰柔男不耐煩地皺了皺眉，拉起你的手臂。',
    'show character gna-fz hand_black',
    's 你順著他的目光看去，只見你的手腕處慢慢浮現出一個痣一樣的黑點，',
    'show character gna-fz hand_green',
    's 等到完全顯現出來後，黑點又開始變色，由黑色逐漸轉變為淺綠。',
    'i （是綠色的？）',
    'hide character gna-fz',
    'show character tj1-fz normal',
    'tj1-fz 得嘞，貴人您有閑去別處轉轉，咱家這裡還忙著驗下一位呢。',
    'hide character tj1-fz',
    // 此處依次閃過幾個畫面【閃現切換】：bg1#（暫時還無，可以暫時用驗處閣代替）
    // 手臂點變色（黑-淺綠）-> 看到閣樓內景->走路時帶起的裙擺->排著隊的後宮嬪妃->走出門：鳥鳴蝶飛宮牆春柳，顏色與手腕的點一樣
    's 你恍惚地轉身，只覺眼前的一切都無比陌生：木制的桌椅，雕花的門窗，你走路時帶起的繁複裙擺，還有排著隊的如雲美女們。',
    's 走出門，草長鶯飛，春日正好，院子裡柳樹剛剛抽出新條，顏色與你手腕的新點很像。',
    //初至異世界（驗處閣）劇情截至此處
    //以下為交代世界線部分劇情，過渡部分採用淡入-黑屏一會-淡出
    //場景2（bg2-willow-spring）：宮牆柳-春；人物：宮女a,b,c（gna-fz gnb-fz gnc-fz）
    //bgm 繼續鳥鳴白噪音（待確定）
    'show scene #000000',
    's ……',
    's 恍惚了七日之後，你終於逐漸明白了現狀：你穿越了。',
    'show scene willow_spring with fadeIn duration 3s',
    'play sound bird',
    'i （既來之則安之，還是學習穿越前輩們，先弄清楚時代地點吧。）',
    'i （不如找一些宮女姐姐探探消息，若能借此機會與姐姐們交好更是極好。）',
    'i （正好今日早課，路途又長，要不就和前面的幾位姐姐談談。）',
    'play sound stats_up',
    'i 這位姐姐！',
    'show character gna-fz smile',
    'gna-fz 妹妹可是在叫我？',
    'i 正是。妹妹我是剛進宮的9527號，這幾日初來乍到，尚不清楚這宮中的規矩，不知姐姐可否指點一二？',
    'show character gna-fz normal',
    'gna-fz 哎呀！沒有人帶你熟悉宮裡的規矩麼？',
    'i 惶恐。妹妹剛來這兩日，還未見有姑姑教導禮儀。',
    'gna-fz 怎麼回事。只聽說近來帝國後宮擴招，可沒想到新人竟多得管教不過來了。',
    'gna-fz 這要是出了什麼紕漏……',
    'show character gna-fz smile',
    'gna-fz 妹妹，有什麼想知道的，你儘管問就是。',
    'i 太好了，謝謝姐姐！',
    'i 只是妹妹因為不安，一時竟連現今的年月都記不清了呢……',
    'show character gna-fz normal',
    'gna-fz 哎呀，也難怪。',
    'gna-fz 別說是妹妹不記得，連我也都快記不清了喲。',
    'gna-fz 皇上已經好久不曾臨幸後宮了。',
    'show character gna-fz whisper',
    'gna-fz （壓低聲音）聽說皇上身體有疾，近三年來一直纏綿病榻……',
    's 你還在消化這些資訊，一旁的兩位元宮女就插進了對話。',
    'hide character gna-fz',
    'show character gnb-fz normal',
    'gnb-fz 纏綿病榻！呵呵，姐姐，你信這個呀……',
    'hide character gnb-fz',
    'show character gnc-fz normal',
    'gnc-fz 就是。',
    'show character gnc-fz titter',
    'gnc-fz （小聲）說是皇上有疾，莫不是年紀大了，那活兒，嘻嘻……',
    'hide character gnc-fz',
    'show character gna-fz frightened',
    'gna-fz ……',
    'show character gna-fz whisper',
    'gna-fz 放肆！這可是犯上。',
    'gna-fz 這些話要是被人聽到了，有你們好果子吃的。',
    'hide character gna-fz',
    'show character gnc-fz innocent',
    'gnc-fz 我們知道姐姐不會告密的。姐姐最好了！',
    'hide character gnc-fz',
    's 宮女姐姐轉向你。',
    'show character gna-fz normal',
    'gna-fz （小聲）妹妹別聽她們胡說，在這兒亂說話可要被打入冷宮的。',
    'show character gna-fz smile',
    'gna-fz 對了，你不是在問今年的年號嗎？',
    'gna-fz 今年是建康五十五年。',
    'i （五十五年……不得了，在位時間可真久啊？）',
    'i （不對，重點是建康這個年號……似乎是東漢？有五十多年這麼久嗎……）',
    'i 姐姐，恕我冒昧，現在可是大漢？',
    'show character gna-fz normal',
    'gna-fz ……大漢是什麼？',
    'gna-fz 往前也沒叫這個的朝代啊？',
    'gna-fz 現在是大杏王朝。',
    'hide character gna-fz',
    'i （大杏王朝……是什麼架空世界嗎？）',
    'i （算了，一旦接受了這個設定……）',
    'show character gnb-fz think',
    'gnb-fz ……不過也不知皇上究竟是怎麼想的？明明不臨幸妃嬪，反而還擴招後宮。',
    'gnb-fz 這樣一來，我們何時才有出頭之日？',
    'hide character gnb-fz',
    'show character gna-fz normal',
    'gna-fz 國家之事，豈是我們小小宮女可以置喙的？',
    'gna-fz 也許皇上有他不得不這樣做的考量。',
    'hide character gna-fz',
    'show character gnc-fz normal',
    'gnc-fz 可皇上不僅擴招，還要驗處。從三年前開始，每七日大檢一次，查驗後宮之人是不是處女……',
    'hide character gnc-fz',
    'show character gnb-fz normal',
    'gnb-fz 可不是，整整三年，有驗出過什麼東西來麼？',
    'gnb-fz 這宮牆之內只有女人與公公，怎可能有誰平白失掉清白之身？',
    'gnb-fz 三年了，可老實說我還是驗不慣。這勞心勞神的日子什麼時候才是個頭……',
    'hide character gnb-fz',
    'show character gnc-fz normal',
    'gnc-fz 姐姐，這你就不明白了吧？',
    'show character gnc-fz titter',
    'gnc-fz （小聲）要是我們不招不驗，不就相當於直接昭告天下，皇上那兒不——',
    'hide character gnc-fz',
    'show character gna-fz whisper',
    'gna-fz 還不快住嘴！',
    'gna-fz 馬上就要輪到我們了，要是公公們聽見了，可不會像我這樣睜一隻眼閉一隻眼。',
    'gna-fz 你們總覺得我事事都要管教，我可都是為了保護你們啊。',
    'show scene nucleic with fadeIn duration 3s',
    's 一陣沉默之後，你們一個個乖巧地走到驗處公公的面前張開嘴巴，迎接送到嘴裡的蠱蟲。',
    's ……',
    's 查驗結束後，你們又聚在一起，熱切地注視起自己手腕上的痣。',
    'show character gna-fz smile',
    'gna-fz 太好了，沒有變色。',
    'hide character gna-fz',
    'show character gnc-fz normal',
    'gnc-fz 呼。我真怕它哪天突然就變紅了，到時候哪怕自己是清白的也無處說理。',
    'hide character gnc-fz',
    'show character gnb-fz smile',
    'gnb-fz 妹妹，蠱術可是不會說謊的，嘻嘻……',
    'gnb-fz 如果不做虧心事，怎會無端變色呢？',
    'hide character gnb-fz',
    //交代世界線部分劇情截至此
    //以下為驗處頻率增大部分劇情，過渡部分採用淡入-黑屏一會-淡出
    //場景（bg1）：驗處閣門前
    //人物：三宮女（gna-fz gnb-fz gnc-fz）+大太監（tj1-fz）+被驗出非處的宮女d（gnd-fz）
    'show scene #000000',
    's 你們一邊說笑，一邊一道向來時的路走去。',
    's 如此的日子過了半年，除開每七日便要受一遍的罪，後宮的日子倒算清閒。',
    's 你每日睡到日上三竿，空閒時還與左右院子的姐妹聊些衣裳之類的閒話。',
    'play sound bird',
    'show scene nucleic with fadeIn duration 3s',
    's 這日在排隊驗處時，你們眾姐妹又聊起了後宮太監們的閒話。',
    'show character gnc-fz normal',
    'gnc-fz 你們聽聞了嗎？前日驗處的小德子在宮外賭坊被砍手了……',
    'hide character gnc-fz',
    'show character gna-fz normal',
    'gna-fz 他是如何出宮的？',
    'hide character gna-fz',
    'show character gnb-fz normal',
    'gnb-fz 出宮倒是沒甚稀奇，蠱蟲的養料總需要人採辦。',
    'gnb-fz 我聽聞他們有時爭採辦名額甚至會打起來呢，原來是要借採辦出去快活呀。',
    'hide character gnb-fz',
    'show character gnc-fz normal',
    'gnc-fz 正是如此。',
    'gnc-fz 那小德子拿了十兩銀子去賭，最後可是輸了莊家整二百兩呢……',
    'hide character gnc-fz',
    'i 他哪來的十兩銀子？',
    'show character gnb-fz smile',
    'gnb-fz 哪來的……當然是驗處的賞錢，驗得多拿得多。',
    'gnb-fz 小德子是昌貴最疼的乾兒子，給他分的驗處名額最多，一月四回下來，攢個十兩有何難的。',
    'hide character gnb-fz',
    'show character gnc-fz titter',
    'gnc-fz 是這個理，比起爭採辦，他們爭起驗處的名額來可更厲害呢！',
    'hide character gnc-fz',
    'show character gna-fz normal',
    'gna-fz 都說後宮女人勾心鬥角，誰承想在咱們這兒，這戲還輪不到咱們來唱呢。',
    'hide character gna-fz',
    'play sound footsteps',
    's 你們正說著話，一陣腳步聲傳來，大太監昌貴在乾兒子們的簇擁下忽然出現。',
    's 昌貴用不哭不笑的臉皮和不冷不熱的語氣讓乾兒子們退下，然後面向眾人清了清嗓子。',
    'show character tj1-fz normal',
    'tj1-fz （咳嗽兩聲）貴人們，雜家今日叨擾，是來立個新規矩。',
    'tj1-fz 咱們這後宮，出了件醜事……上回，有嬪妃被驗出非處。',
    'tj1-fz 醜事不宜聲張，各位心裡有數，懂事自愛即可。',
    'tj1-fz 但為了醜事不再發生，自今日起，咱們的驗處增加為兩日一回，望各位貴人互相轉達。',
    'tj1-fz ……得，雜家別處還有雜事，就先退下了。',
    'hide character tj1-fz',
    's 宮女們聞言一片譁然。',
    'show character gna-fz normal',
    'gna-fz 奇了怪了。這怎麼可能？',
    'hide character gna-fz',
    'show character gnc-fz normal',
    'gnb-fz 簡直胡扯……宮牆之內連男根都沒有，怎麼可能出現非處呢？',
    'hide character gnc-fz',
    'show character gna-fz normal',
    'gna-fz 就是呀。莫非真的有姐妹不守規矩，偷偷去與那不知來路的野小子幽會……',
    'hide character gna-fz',
    'show character gnb-fz normal',
    'gnb-fz 哎呀！想不到宮牆之中，竟也有這般不知羞恥之人。',
    'gnb-fz 自己不守規矩也就算了，還要害得我們每週多驗兩回。',
    'hide character gnb-fz',
    'show character gna-fz normal',
    'gna-fz 可是後宮防衛如此森嚴，就算有人要幽會，他們又是怎麼碰面的呢？莫非是插了翅膀不成？',
    'hide character gna-fz',
    'show character gnc-fz normal',
    'gnc-fz ……姐姐們可真是心善，怎麼就知道壞了規矩的是牆外之人呢？',
    'gnc-fz 你們看每日在後宮進進出出的，除了太監還有誰？',
    'gnc-fz （小聲）要是哪個公公沒閹乾淨……',
    'hide character gnc-fz',
    's 宮女們一下子變得臉色煞白。',
    'show character gna-fz frightened',
    'gna-fz 你是說，監守自——',
    'show character gna-fz whisper',
    'gna-fz ……',
    'hide character gna-fz',
    'show character gnb-fz normal',
    'gnb-fz ……',
    'hide character gnb-fz',
    'i ……',
    'show character gnc-fz normal',
    'gnc-fz ……哎呀。姐姐們臉色怎麼都這麼可怕！姐姐們知道我一向口無遮攔，開玩笑罷了。罪過罪過……',
    'hide character gnc-fz',
    's 你們自顧自小聲議論著。昌貴沒有正眼瞧你們，在乾兒子哈著腰的目送中向院外走去。',
    'i （不行，我得問點什麼。）',
    'play sound footsteps',
    'i 鄭公公留步！',
    'show character tj1-fz normal',
    'i 可否允許我問一句？被驗出非處的究竟是……',
    'tj1-fz ……這位貴人，沒有人教過你規矩麼？此等不光彩之事，斷不應如此大聲議論。',
    'tj1-fz ……還是說貴人也想和那位一樣，到冷宮裡修身養性一陣呀？',
    's 昌貴瞥了旁邊的宮女一眼，你順著他的眼神看過去，只見一位宮女眼神躲閃，手不自覺地捂上了手腕的位置。',
    'hide character tj1-fz',
    'i （莫非這就是驗出了非處的那位……）',
    'show character gnd-fz cry',
    'gnd-fz ……不是的……',
    'hide character gnd-fz',
    'show character tj1-fz normal',
    'tj1-fz 雜家有事先行一步。如各位安分守己，自然會有享福之日，而逾矩之人將馬上受到處置。希望各位好自為之。',
    'hide character tj1-fz',
    's 昌貴說罷揚長而去。',
    'show character gnc-fz normal',
    'gnc-fz 欺人太甚，他簡直把咱們看得比奴才還輕。',
    'hide character gnc-fz',
    'show character gna-fz whisper',
    'gna-fz 宮牆之內誰人不知，如若恩寵永不臨，咱們豈不就是比奴才還輕賤麼……入宮時就早已註定。',
    'hide character gna-fz',
    'i 可話說回來，剛才那位姐姐……',
    'show character gnd-fz cry',
    'gnd-fz 我是清白的……',
    'hide character gnd-fz',
    'show character gna-fz normal',
    'gna-fz 好妹妹，我相信你。',
    'gna-fz ……可是你回憶下，是不是什麼時候不小心碰到不認識的男人了，或許碰了手，搭了肩什麼的？畢竟蠱術這麼久以來也不曾出過錯……',
    'hide character gna-fz',
    'show character gnd-fz cry',
    'gnd-fz 呵。可笑……我真的什麼也不曾做，要我如何自證沒做過的事情？',
    'show character gnd-fz scared',
    'gnd-fz 蒼天可鑒，我一刻也不曾背叛過皇上……',
    'gnd-fz 究竟是蠱術錯了，還是我錯了？',
    'gnd-fz 如果連姐姐們也不相信我，我只得以死——',
    'hide character gnd-fz',
    'show character gna-fz normal',
    'gna-fz 妹妹莫衝動呀！',
    'hide character gna-fz',
    'show character gnc-fz normal',
    'gnc-fz 就是就是！就憑那太監的一面之辭，何至於此。',
    'hide character gnc-fz',
    'show character gnd-fz cry',
    'gnd-fz 只是，要將我打入冷宮的決議，恐怕難以改變……',
    'i 是啊，恐怕姐姐要受些苦了。可是留得青山在，不怕沒柴燒嘛，苟且偷生也好過早早折在這裡。',
    'gnd-fz 我怎麼會不知道？可是這一旦被打入冷宮，我的餘生都要在屈辱和嘲笑中度過……',
    'gnd-fz 還不如索性……',
    'i ……姐姐，接下來的日子一定很苦。',
    'i 可是公道自在人心，總有一日會還你清白的。',
    'hide character gnd-fz',
    'show character gnc-fz normal',
    'gnc-fz 這後宮之中有誰敢說你的閒話，我們第一個不放過！',
    'hide character gnc-fz',
    'show character gnd-fz cry',
    'gnd-fz 哈哈，妹妹們，真會哄我呀……你們有這份心我已經很高興了。',
    'gnd-fz 罷了，也許這一切都是天意，難違呀。',
    'gnd-fz 如果有緣的話，再見吧……',
    'hide character gnd-fz',
    's 你目送著那位宮女被帶走，心中愁緒鬱結難平。',
    'i （可是……被驗出非處的妃嬪果真就是非處嗎？）',
    's 你無法不想起方才姐妹說起的，去賭坊的太監和驗處的賞錢。',
    //驗處頻率加大部分劇情截至此
    //以下為走向BE部分劇情，過渡部分採用淡入-黑屏一會-淡出
    //場景（bg2）： 宮牆柳
    'show scene #000000',
    's ……',
    's 但你也沒甚法子可想，只能被迫接受驗處的週期越來越短。',
    'play sound bird',
    'show scene willow_spring with fadeIn duration 3s',
    's 從每七日到每兩日，每兩日到每日，每日一回到每日兩回……',
    's 漸漸地，你的生活只剩下了被驗處這回事。',
    's 從你的小院到太監所的路上有八百塊三十四塊磚，你上午數著它們到太監所，再數著它們回來，便可用午飯，歇過一刻，便要再度數著磚頭過去。',
    // 宮牆柳-春（bg2-willow-spring）與宮牆柳-冬（bg2-willow-winter）交錯淡入淡出，作為時間流逝效果
    'centered',
    'show scene willow_winter with fadeIn duration 2.5s',
    'centered',
    'show scene willow_spring with fadeIn duration 2.5s',
    'centered',
    's 路上的楊柳綠了又枯，枯了又綠，你漸漸不再期待楊柳依依的半路偶遇聖駕，只盼望紅日高照的一天太監能少擺點臉色。',
    'centered',
    'show scene willow_winter with fadeIn duration 2.5s',
    'centered',
    'show scene willow_spring with fadeIn duration 2.5s',
    'centered',
    'show scene willow_winter with fadeIn duration 2.5s',
    'centered',
    // 宮磚（bg2#）與驗處太監臉（立繪1）與手臂點變色（bg1#中的手臂點變色）交錯淡入淡出重複【迴圈重複3次】
    'show scene brick with fadeIn duration 2.5s',
    'centered',
    's ……又不知從何時起，你不再抬頭看柳樹的枝條，也不再有空與姐妹們聊細碎的閒話。',
    'show character tj2-fz normal with fadeIn duration 2s',
    'wait 1000',
    'hide character tj2-fz with fadeOut duration 2s',
    's 日子只剩下青色的宮磚，',
    'show character tj2-fz normal with fadeIn duration 2s',
    'wait 1000',
    'hide character tj2-fz with fadeOut duration 2s',
    's 白色的蠱蟲，',
    'show character tj2-fz normal with fadeIn duration 2s',
    'wait 1000',
    'hide character tj2-fz with fadeOut duration 2s',
    's 青白色的太監臉。',
    's 那位當初因為非處而打入冷宮的姐姐，現今究竟怎麼樣了呢？你無法得知她的消息。',
    's 她還在等著嗎？',
    's ……',
    'show scene #000000',
    's 可是你很快就永遠無法知道了。',
    's 積郁成疾，三年後，你死在了雙十年華。',
    'play sound notification',
    'show message Ending-E6first-fz',
    'centered',
    'centered ……',
    'centered ……',
    'centered ……',
    'i ……',
    'i (可是，假如一切可以重來，我是不是能做出什麼改變？)',

    //解鎖關卡
    {'Function':{
      'Apply':function(){
        unlock_level('level-E6-second');
      },
      'Reverse':function(){
        lock_level('level-E6-second')
      },
    }},
    's （已解鎖劇情支線【宮牆綠柳紅砂 2】，可以在主功能表-故事線中點擊進入）',

    // 跳轉至關卡選擇
    {'Function':{
      'Apply':function(){
        goToLevelScreen();
      },
      'Reverse':function(){
        
      },
    }},

    // 勿刪，否則重新從主菜單進入遊戲的時候不會重置
    'centered',
    'jump Start',
])

/**
 * ====================================
 *【E61】E6-1劇情（後宮線二周目開頭）如下
 * ====================================
 **/
 monogatari.label('E61-decision', '繁體中文', [
  //以下為二周目開頭劇情：回到驗處閣
  //場景1：太監所驗處閣（bg1）
  //人物： tj1-fz = 大太監昌貴
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
  // 設置文字方塊效果
  {'Function':{
    'Apply': function () {
      setTextBoxCSS(textBoxE6);
    },

    'Reverse': function () {
      setTextBoxCSS(textBoxDefault);
    }   
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
  'show scene #000000',
  'centered',
  'play sound bird',
  'show scene nucleic with fadeIn duration 5s',
  's 睜開眼，眼前並非無間地獄。',
  's 左右是木制的桌椅，雕花的門窗，排著隊的如雲美女。',
  's 窗外，草長鶯飛，春日正好，院子裡柳樹剛剛抽出新條，顏色與你手腕的新點很像。',
  'i （！真又回到了這裡嗎）',
  's 然而還尚未從重生的喜悅中恢復理智，你便聽到熟悉的尖銳嗓音——',
  'show character tj1-fz normal',
  'tj1-fz 得嘞，貴人您有閑去別處轉轉，咱家這裡還忙著驗下一位呢。',
  'hide character tj1-fz',
  's 你眼前閃過前世無數條蠱蟲的軟綿綿的頭與僵直的軀幹，一股悲哀讓你幾乎嘔吐出來……',
  'play sound choices',
  //進入選擇：是否改命
  {
    'Choice':
    {
      'Dialog': 's 沒想到竟要重來一遭，你是否要改變選擇……',
      'nochange': 
        {
          'Text': '本也想逆天改命，但無奈太監掌握後宮用度的分配，不便得罪，只能重蹈這趟覆轍',
          'Do': 'jump E61A-nochange',
          //跳轉到【E6-1A】E61A-nochange，重複一周目劇情
        },
      'noobey': 
        {
          'Text': '管他勞什子用度克扣，宮裡總歸餓不死人，不配合便是',
          'Do': 'jump E61B-noobey',
          //跳轉到【E6-1B】E61B-noobey，非暴力不合作-個體種植自給自足
        },
      'protest': 
        {
            'Text': '宮中姐妹三千多號，要想法子整合她們推翻太監的作威作福',
            'Do': 'jump E61C-protest',
            //跳轉到【E6-1C】E61C-protest，帶領宮女抗議
        },
    }
  },
])

/**
* ====================================
*【E61】E6-1劇情（後宮線二周目開頭）如下
* ====================================
**/
monogatari.label('E61A-nochange', '繁體中文', [
  //以下為二周目A結局：重蹈覆轍
  // 宮牆柳-春（bg2-willow-spring）與宮牆柳-冬（bg2-willow-winter）交錯淡入淡出，作為時間流逝效果
  // 宮磚（bg2#）與驗處太監臉（立繪1）與手臂點變色（bg1#中的手臂點變色）交錯淡入淡出重複【迴圈重複3次】
  // 設置文字方塊效果
  {'Function':{
    'Apply': function () {
      setTextBoxCSS(textBoxE6);
    },

    'Reverse': function () {
      setTextBoxCSS(textBoxDefault);
    }   
  }},
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
  // 解鎖劇情線
  {'Function':{
    'Apply':function(){
      unlock_level('level-E6-brick');
    },
    'Reverse':function(){
      lock_level('level-E6-brick')
    },
  }},
  'show scene willow_spring',
  'show scene #000000',
  's 因為不想得罪掌管吃穿用度的太監，你選擇噤聲，繼續著無論寒冬酷暑也要前往太監所驗處的生活。',
  'centered',
  'show scene willow_winter with fadeIn duration 2.5s',
  'centered',
  'show scene willow_spring with fadeIn duration 2.5s',
  'centered',
  'show scene willow_winter with fadeIn duration 2.5s',
  'centered',
  's 你經歷了與前世一模一樣的一世。',
  'show scene #000000',
  's 在半年清閒日子後，太監們為了斂財上報非處，驗處週期變得越來越短，你把八百三十四塊磚的花紋記得更清楚了些。',
  's 三年之後，你再次死于積鬱。',
  'play sound notification',
  'show message Ending-cdfz-fz',
  'end',
  /*
  藤原：此處未設置節點跳轉；需要之後補。
  此處自動跳轉到本體線核酸監督【不】沖塔劇情（只能走2C這條線）（需要在核酸線的開頭定義環境變數？）
  核酸線還沒有轉寫，等核酸線設完再設置跳轉節點
  */
])


