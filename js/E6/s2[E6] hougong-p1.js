/**
*   索引：
*   s = 旁白 , i = 我 , gna = 宫女a , gnb = 宫女b , gnc = 宫女c
*   tj1 = 大太监昌贵, tj2 = 验处太监, gnd = 宫女d
**/

//画廊、结局弹窗和人物名尚未繁中化

// Define the messages used in the game.
monogatari.action ('message').messages ({
  // 结局弹窗
  'Ending-E6first': {
    title: '结局：宫墙绿柳葬红颜',
    subtitle: '咽不下玉粒金莼噎满喉，照不见菱花镜里形容瘦。',
    body: `
      <p>你在日复一日验处的更声中潦草地结束了一生。</p>
      <img src='./assets/gallery/E6_end_brick.png' width="40">

    `
},

  'Ending-cdfz': {
      title: '结局：重蹈覆辙',
      subtitle: '命运给了你第二次机会，但你还是没能逃出帝国写给你的终局。',
      body: `
        <p>（如果能再来一次的话……点击主菜单“故事线”重新从前一节点开始）</p>
        <img src='./assets/gallery/E6_end_brick.png' width="40">

      `
  },

  'Ending-fblbhz': {
    title: '结局：非暴力不合作',
    subtitle: '拒绝是你最后的尊严。',
    body: `
      <p>你成功摆脱了繁文缛节的束缚。然而，宫中其余的姐妹们又命运如何呢？她们并不一定都能如你一般超然物外，最终脱离苦海。</p>
      <p>（如果能再来一次的话……点击主菜单“故事线”重新从前一节点开始）</p>
      <img src='./assets/gallery/E6_end_hermit.png' width="40">

    `
  },

  'Ending-E6true': {
    title: '结局：火烧蛊虫',
    subtitle: '野火烧不尽，春风吹又生。',
    body: `
      <p>那宫墙依旧森然矗立，可你们却在其中建立了一方自由的天地。或许有一天，你们也能够改变整个帝国的命数。</p>
      <img src='./assets/gallery/E6_end_fire.png' width="40">

    `
  },

  // 画廊解锁弹窗
  'E6_cgunlock_night_posters': {
    title: '解锁画廊：青瓦墙，朱字纸',
    subtitle: '',
    body: `
      <p>即便是最不起眼的青色宫墙也目睹过最凄切的哀伤。而今夜，你们决定以血和泪的控诉装点它。</p>

    `
  },

  'E6_cgunlock_riot': {
    title: '解锁画廊：宫妃起义',
    subtitle: '',
    body: `
      <p>你们的声音积沙成塔，聚水为流，最终汇成一句话：起来，不愿受压迫的姐妹们！</p>

    `
  },

  'E6_cgunlock_set_fire': {
    title: '解锁画廊：火烧蛊虫',
    subtitle: '',
    body: `
      <p>大火烧尽的是太监所的贞洁字纸，点燃的却是你们渴望的心。</p>

    `
  },

}),

monogatari.assets ('scenes', {
	'nucleic': 'E6_nucleic_acid_pavilion.png', //太监所验处阁
  'willow_spring': 'E6_willow_spring.png', // 宫墙柳（春）
  'willow_winter': 'E6_willow_winter.png', // 宫墙柳（冬）
  'brick':'E6_brick.jpg', //宫墙
  'bag': 'E6_window_bag.png',
  'nobag': 'E6_window_nobag.png',
  'farm': 'E6_farm.png',
  'school': 'E6_school.png',
  'E3_factory': 'E3_factory.png',
  'E1_bus': 'E1_bus.png',
  'E3_corridor_night': 'E3_corridor_night.png',
  

});

// Define the images used in the game.
monogatari.assets ('images', {
  'set_fire': 'E6_cg_set_fire.png',
  'riot': 'E6_cg_riot.jpg',
  'night_posters': 'E6_cg_night_posters.jpg',
  
});

// Define the gallery.
monogatari.assets ('gallery', {
  'E6_cg_night_posters': 'E6_cg_night_posters.jpg',
  'E6_cg_set_fire': 'E6_cg_set_fire.png',
  'E6_cg_riot': 'E6_cg_riot.jpg',
});

//Define the cahracters.
monogatari.characters ({
  'gna': {
		name: '宫女a',
		color: '#FF6699',
    directory: 'E6-gongnv',
    sprites:{
      'normal':'gna_normal.png',
      'smile':'gna_smile.png',
      'frightened':'gna_frightened.png',
      'whisper':'gna_whisper.png',
      'after':'gna_after.png',
      'hand_green': 'gna_hand_green.png',
      'hand_black': 'gna_hand_black.png',
      
    },
  },
  'gnb': {
		name: '宫女b',
		color: '#FF3366',
    directory: 'E6-gongnv',
    sprites:{
      'normal':'gnb_normal.png',
      'smile':'gnb_smile.png',
      'think':'gnb_think.png',
      'after':'gnb_after.png',
    }
  },
  'gnc': {
		name: '宫女c',
		color: '#FF99CC',
    directory: 'E6-gongnv',
    sprites:{
      'normal':'gnc_normal.png',
      'titter':'gnc_titter.png',
      'innocent':'gnc_innocent.png',
      'after':'gnc_after.png',
    }
  },
  'gnd': {
		name: '宫女d',
		color: '#FF99FF',
    directory: 'E6-gongnv',
    sprites:{
      'cry':'gnd_cry.png',
      'scared':'gnd_scared.png',
    }
  },
  'tj1': {
		name: '大太监昌贵',
		color: '#33FF33',
    directory: 'E6-gongnv',
    sprites:{
      'normal':'tj1.png',
    }
  },
  'tj2': {
		name: '验处太监',
		color: '#33FF33',
    directory: 'E6-gongnv',
    sprites:{
      'normal':'tj2.png',
    }
  },

  'tj3': {
		name: '小太监',
		color: '#33FF33',
    directory: 'E6-gongnv',
    sprites:{
      'normal':'tj3.png',
    }
  },
})

/**
* ====================================
*【E60-BE】E6-0剧情如下
* ====================================
**/
monogatari.label('E60-BE', '简体中文', [
  /* 's 等你回过神来，发现伸在面前的不是咽拭子，而是一条白色的蛊虫。',
  */
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

    // 文本框效果
    {'Function':{
      'Apply': function () {
        setTextBoxCSS(textBoxDefault);
      },

      'Reverse': function () {
        setTextBoxCSS(textBoxDefault);
      }   
    }},
    // 玩家姓名设定
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

    // 解锁世界线
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
    // 正式版剧情暂时改为注释
    /* 's 不知道为什么，你最近几天做完核酸以后，喉咙每次都感觉有点不舒服，嗓子干干的，总想要咳嗽。',
    's 从上一次做完核酸到下一次核酸之前，干咳的冲动有衰减趋势，然而每次核酸又会激发新的冲动，于是它的函数图像便呈现出诡异的周期性。',
    's 这天，你又照常来到核酸亭，正仰头瞥着伸向你喉咙的咽拭子，忽然突发奇想。',
    'i 也许做核酸其实是在接种某种东西呢？',
    'i 它在我的喉咙寄生，接着死掉，直到下一次接种新的进来。',
    'i 干咳的冲动，也许是身体本能的排异反应？',
    'show scene #FFFFFF with fadeIn duration 7s',
    's 还没来得及嘲笑自己的被害妄想症，你的眼前忽然涌现出白茫茫的光团。',
    's 光团越来越大，吞没世界，你眼睁睁看着所有事物扭成一束光——',
    's ——电光火石之间，新的世界铺陈开来。', */
    // 先行版剧情开场
    'show scene laptop with fadeIn duration 3s',
    'play sound bird',
    's 某个温暖的午后，你百无聊赖地打开笔记本电脑，盯着文档中闪烁的光标发呆。',
    'i 写了半天还只有300字……',
    'i 天气这么好，写什么无聊文章，就应该出门踏青呀。',
    'show scene #000000',
    's 你这样想着，不禁闭上双眼，陷入回忆。',
    'i 还记得去年春天这个时候……',
    'i ……',
    'i ……',
    'i （奇怪，为什么想不起来去年这时候在做什么了？）',
    'show scene #FFFFFF with fadeIn duration 7s',
    's 还没想出个所以然，你的眼前就忽然涌现出白茫茫的光团，',
    's 光团越来越大，吞没一切，你眼睁睁看着所有事物扭成一束光——',
    's ——电光火石之间，新的世界铺陈开来。',

    //以下为一周目BE剧情：无反抗-死亡
    //场景1：太监所验处阁（bg1）
    //人物： tj1 = 大太监昌贵
    //bgm：鸟鸣白噪音
    // 文本框设计
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
    'show character tj2 normal with fadeIn 3s',
    'wait 3000',
    's 等你回过神来，赫然发现面前伸着一条蠕动着的白色蛊虫。',
    's 还尚未看清它绵软的头部和僵直的身躯，它就被强行地送进了你的喉咙。', 
    'play sound stats_down',      
    'i ！咳咳咳咳',
    'hide character tj2',
    's 一道尖锐的嗓音自头顶传来。',
    'show character tj1 normal',
    'tj1 又不是头一回，贵人您还没习惯哪？',
    's 你抬头，只见眼前是一张脂粉气颇重的男性面孔。他戴着很高的帽子，嘴角上挑，上眼睑耷拉着，轻蔑地看向你。',
    'i 什么……？',
    's 你开口，惊讶地发现自己发出了一副轻柔到无力的嗓音，一副明显不属于你的嗓音。',
    'hide character tj1',
    's 阴柔男不耐烦地皱了皱眉，拉起你的手臂。',
    'show character gna hand_black',
    's 你顺着他的目光看去，只见你的手腕处慢慢浮现出一个痣一样的黑点，',
    'show character gna hand_green',
    's 等到完全显现出来后，黑点又开始变色，由黑色逐渐转变为浅绿。',
    'i （是绿色的？）',
    'hide character gna',
    'show character tj1 normal',
    'tj1 得嘞，贵人您有闲去别处转转，咱家这里还忙着验下一位呢。',
    'hide character tj1',
    // 此处依次闪过几个画面【闪现切换】：bg1#（暂时还无，可以暂时用验处阁代替）
    // 手臂点变色（黑-浅绿）-> 看到阁楼内景->走路时带起的裙摆->排着队的后宫嫔妃->走出门：鸟鸣蝶飞宫墙春柳，颜色与手腕的点一样
    's 你恍惚地转身，只觉眼前的一切都无比陌生：木制的桌椅，雕花的门窗，你走路时带起的繁复裙摆，还有排着队的如云美女们。',
    's 走出门，草长莺飞，春日正好，院子里柳树刚刚抽出新条，颜色与你手腕的新点很像。',
    //初至异世界（验处阁）剧情截至此处
    //以下为交代世界线部分剧情，过渡部分采用淡入-黑屏一会-淡出
    //场景2（bg2-willow-spring）：宫墙柳-春；人物：宫女a,b,c（gna gnb gnc）
    //bgm 继续鸟鸣白噪音（待确定）
    'show scene #000000',
    's ……',
    's 恍惚了七日之后，你终于逐渐明白了现状：你穿越了。',
    'show scene willow_spring with fadeIn duration 3s',
    'play sound bird',
    'i （既来之则安之，还是学习穿越前辈们，先弄清楚时代地点吧。）',
    'i （不如找一些宫女姐姐探探消息，若能借此机会与姐姐们交好更是极好。）',
    'i （正好今日早课，路途又长，要不就和前面的几位姐姐谈谈。）',
    'play sound stats_up',
    'i 这位姐姐！',
    'show character gna smile',
    'gna 妹妹可是在叫我？',
    'i 正是。妹妹我是刚进宫的9527号，这几日初来乍到，尚不清楚这宫中的规矩，不知姐姐可否指点一二？',
    'show character gna normal',
    'gna 哎呀！没有人带你熟悉宫里的规矩么？',
    'i 惶恐。妹妹刚来这两日，还未见有姑姑教导礼仪。',
    'gna 怎么回事。只听说近来帝国后宫扩招，可没想到新人竟多得管教不过来了。',
    'gna 这要是出了什么纰漏……',
    'show character gna smile',
    'gna 妹妹，有什么想知道的，你尽管问就是。',
    'i 太好了，谢谢姐姐！',
    'i 只是妹妹因为不安，一时竟连现今的年月都记不清了呢……',
    'show character gna normal',
    'gna 哎呀，也难怪。',
    'gna 别说是妹妹不记得，连我也都快记不清了哟。',
    'gna 皇上已经好久不曾临幸后宫了。',
    'show character gna whisper',
    'gna （压低声音）听说皇上身体有疾，近三年来一直缠绵病榻……',
    's 你还在消化这些信息，一旁的两位宫女就插进了对话。',
    'hide character gna',
    'show character gnb normal',
    'gnb 缠绵病榻！呵呵，姐姐，你信这个呀……',
    'hide character gnb',
    'show character gnc normal',
    'gnc 就是。',
    'show character gnc titter',
    'gnc （小声）说是皇上有疾，莫不是年纪大了，那活儿，嘻嘻……',
    'hide character gnc',
    'show character gna frightened',
    'gna ……',
    'show character gna whisper',
    'gna 放肆！这可是犯上。',
    'gna 这些话要是被人听到了，有你们好果子吃的。',
    'hide character gna',
    'show character gnc innocent',
    'gnc 我们知道姐姐不会告密的。姐姐最好了！',
    'hide character gnc',
    's 宫女姐姐转向你。',
    'show character gna normal',
    'gna （小声）妹妹别听她们胡说，在这儿乱说话可要被打入冷宫的。',
    'show character gna smile',
    'gna 对了，你不是在问今年的年号吗？',
    'gna 今年是建康五十五年。',
    'i （五十五年……不得了，在位时间可真久啊？）',
    'i （不对，重点是建康这个年号……似乎是东汉？有五十多年这么久吗……）',
    'i 姐姐，恕我冒昧，现在可是大汉？',
    'show character gna normal',
    'gna ……大汉是什么？',
    'gna 往前也没叫这个的朝代啊？',
    'gna 现在是大杏王朝。',
    'hide character gna',
    'i （大杏王朝……是什么架空世界吗？）',
    'i （算了，一旦接受了这个设定……）',
    'show character gnb think',
    'gnb ……不过也不知皇上究竟是怎么想的？明明不临幸妃嫔，反而还扩招后宫。',
    'gnb 这样一来，我们何时才有出头之日？',
    'hide character gnb',
    'show character gna normal',
    'gna 国家之事，岂是我们小小宫女可以置喙的？',
    'gna 也许皇上有他不得不这样做的考量。',
    'hide character gna',
    'show character gnc normal',
    'gnc 可皇上不仅扩招，还要验处。从三年前开始，每七日大检一次，查验后宫之人是不是处女……',
    'hide character gnc',
    'show character gnb normal',
    'gnb 可不是，整整三年，有验出过什么东西来么？',
    'gnb 这宫墙之内只有女人与公公，怎可能有谁平白失掉清白之身？',
    'gnb 三年了，可老实说我还是验不惯。这劳心劳神的日子什么时候才是个头……',
    'hide character gnb',
    'show character gnc normal',
    'gnc 姐姐，这你就不明白了吧？',
    'show character gnc titter',
    'gnc （小声）要是我们不招不验，不就相当于直接昭告天下，皇上那儿不——',
    'hide character gnc',
    'show character gna whisper',
    'gna 还不快住嘴！',
    'gna 马上就要轮到我们了，要是公公们听见了，可不会像我这样睁一只眼闭一只眼。',
    'gna 你们总觉得我事事都要管教，我可都是为了保护你们啊。',
    'show scene nucleic with fadeIn duration 3s',
    's 一阵沉默之后，你们一个个乖巧地走到验处公公的面前张开嘴巴，迎接送到嘴里的蛊虫。',
    's ……',
    's 查验结束后，你们又聚在一起，热切地注视起自己手腕上的痣。',
    'show character gna smile',
    'gna 太好了，没有变色。',
    'hide character gna',
    'show character gnc normal',
    'gnc 呼。我真怕它哪天突然就变红了，到时候哪怕自己是清白的也无处说理。',
    'hide character gnc',
    'show character gnb smile',
    'gnb 妹妹，蛊术可是不会说谎的，嘻嘻……',
    'gnb 如果不做亏心事，怎会无端变色呢？',
    'hide character gnb',
    //交代世界线部分剧情截至此
    //以下为验处频率增大部分剧情，过渡部分采用淡入-黑屏一会-淡出
    //场景（bg1）：验处阁门前
    //人物：三宫女（gna gnb gnc）+大太监（tj1）+被验出非处的宫女d（gnd）
    'show scene #000000',
    's 你们一边说笑，一边一道向来时的路走去。',
    's 如此的日子过了半年，除开每七日便要受一遍的罪，后宫的日子倒算清闲。',
    's 你每日睡到日上三竿，空闲时还与左右院子的姐妹聊些衣裳之类的闲话。',
    'play sound bird',
    'show scene nucleic with fadeIn duration 3s',
    's 这日在排队验处时，你们众姐妹又聊起了后宫太监们的闲话。',
    'show character gnc normal',
    'gnc 你们听闻了吗？前日验处的小德子在宫外赌坊被砍手了……',
    'hide character gnc',
    'show character gna normal',
    'gna 他是如何出宫的？',
    'hide character gna',
    'show character gnb normal',
    'gnb 出宫倒是没甚稀奇，蛊虫的养料总需要人采办。',
    'gnb 我听闻他们有时争采办名额甚至会打起来呢，原来是要借采办出去快活呀。',
    'hide character gnb',
    'show character gnc normal',
    'gnc 正是如此。',
    'gnc 那小德子拿了十两银子去赌，最后可是输了庄家整二百两呢……',
    'hide character gnc',
    'i 他哪来的十两银子？',
    'show character gnb smile',
    'gnb 哪来的……当然是验处的赏钱，验得多拿得多。',
    'gnb 小德子是昌贵最疼的干儿子，给他分的验处名额最多，一月四回下来，攒个十两有何难的。',
    'hide character gnb',
    'show character gnc titter',
    'gnc 是这个理，比起争采办，他们争起验处的名额来可更厉害呢！',
    'hide character gnc',
    'show character gna normal',
    'gna 都说后宫女人勾心斗角，谁承想在咱们这儿，这戏还轮不到咱们来唱呢。',
    'hide character gna',
    'play sound footsteps',
    's 你们正说着话，一阵脚步声传来，大太监昌贵在干儿子们的簇拥下忽然出现。',
    's 昌贵用不哭不笑的脸皮和不冷不热的语气让干儿子们退下，然后面向众人清了清嗓子。',
    'show character tj1 normal',
    'tj1 （咳嗽两声）贵人们，杂家今日叨扰，是来立个新规矩。',
    'tj1 咱们这后宫，出了件丑事……上回，有嫔妃被验出非处。',
    'tj1 丑事不宜声张，各位心里有数，懂事自爱即可。',
    'tj1 但为了丑事不再发生，自今日起，咱们的验处增加为两日一回，望各位贵人互相转达。',
    'tj1 ……得，杂家别处还有杂事，就先退下了。',
    'hide character tj1',
    's 宫女们闻言一片哗然。',
    'show character gna normal',
    'gna 奇了怪了。这怎么可能？',
    'hide character gna',
    'show character gnc normal',
    'gnb 简直胡扯……宫墙之内连男根都没有，怎么可能出现非处呢？',
    'hide character gnc',
    'show character gna normal',
    'gna 就是呀。莫非真的有姐妹不守规矩，偷偷去与那不知来路的野小子幽会……',
    'hide character gna',
    'show character gnb normal',
    'gnb 哎呀！想不到宫墙之中，竟也有这般不知羞耻之人。',
    'gnb 自己不守规矩也就算了，还要害得我们每周多验两回。',
    'hide character gnb',
    'show character gna normal',
    'gna 可是后宫防卫如此森严，就算有人要幽会，他们又是怎么碰面的呢？莫非是插了翅膀不成？',
    'hide character gna',
    'show character gnc normal',
    'gnc ……姐姐们可真是心善，怎么就知道坏了规矩的是墙外之人呢？',
    'gnc 你们看每日在后宫进进出出的，除了太监还有谁？',
    'gnc （小声）要是哪个公公没阉干净……',
    'hide character gnc',
    's 宫女们一下子变得脸色煞白。',
    'show character gna frightened',
    'gna 你是说，监守自——',
    'show character gna whisper',
    'gna ……',
    'hide character gna',
    'show character gnb normal',
    'gnb ……',
    'hide character gnb',
    'i ……',
    'show character gnc normal',
    'gnc ……哎呀。姐姐们脸色怎么都这么可怕！姐姐们知道我一向口无遮拦，开玩笑罢了。罪过罪过……',
    'hide character gnc',
    's 你们自顾自小声议论着。昌贵没有正眼瞧你们，在干儿子哈着腰的目送中向院外走去。',
    'i （不行，我得问点什么。）',
    'play sound footsteps',
    'i 郑公公留步！',
    'show character tj1 normal',
    'i 可否允许我问一句？被验出非处的究竟是……',
    'tj1 ……这位贵人，没有人教过你规矩么？此等不光彩之事，断不应如此大声议论。',
    'tj1 ……还是说贵人也想和那位一样，到冷宫里修身养性一阵呀？',
    's 昌贵瞥了旁边的宫女一眼，你顺着他的眼神看过去，只见一位宫女眼神躲闪，手不自觉地捂上了手腕的位置。',
    'hide character tj1',
    'i （莫非这就是验出了非处的那位……）',
    'show character gnd cry',
    'gnd ……不是的……',
    'hide character gnd',
    'show character tj1 normal',
    'tj1 杂家有事先行一步。如各位安分守己，自然会有享福之日，而逾矩之人将马上受到处置。希望各位好自为之。',
    'hide character tj1',
    's 昌贵说罢扬长而去。',
    'show character gnc normal',
    'gnc 欺人太甚，他简直把咱们看得比奴才还轻。',
    'hide character gnc',
    'show character gna whisper',
    'gna 宫墙之内谁人不知，如若恩宠永不临，咱们岂不就是比奴才还轻贱么……入宫时就早已注定。',
    'hide character gna',
    'i 可话说回来，刚才那位姐姐……',
    'show character gnd cry',
    'gnd 我是清白的……',
    'hide character gnd',
    'show character gna normal',
    'gna 好妹妹，我相信你。',
    'gna ……可是你回忆下，是不是什么时候不小心碰到不认识的男人了，或许碰了手，搭了肩什么的？毕竟蛊术这么久以来也不曾出过错……',
    'hide character gna',
    'show character gnd cry',
    'gnd 呵。可笑……我真的什么也不曾做，要我如何自证没做过的事情？',
    'show character gnd scared',
    'gnd 苍天可鉴，我一刻也不曾背叛过皇上……',
    'gnd 究竟是蛊术错了，还是我错了？',
    'gnd 如果连姐姐们也不相信我，我只得以死——',
    'hide character gnd',
    'show character gna normal',
    'gna 妹妹莫冲动呀！',
    'hide character gna',
    'show character gnc normal',
    'gnc 就是就是！就凭那太监的一面之辞，何至于此。',
    'hide character gnc',
    'show character gnd cry',
    'gnd 只是，要将我打入冷宫的决议，恐怕难以改变……',
    'i 是啊，恐怕姐姐要受些苦了。可是留得青山在，不怕没柴烧嘛，苟且偷生也好过早早折在这里。',
    'gnd 我怎么会不知道？可是这一旦被打入冷宫，我的余生都要在屈辱和嘲笑中度过……',
    'gnd 还不如索性……',
    'i ……姐姐，接下来的日子一定很苦。',
    'i 可是公道自在人心，总有一日会还你清白的。',
    'hide character gnd',
    'show character gnc normal',
    'gnc 这后宫之中有谁敢说你的闲话，我们第一个不放过！',
    'hide character gnc',
    'show character gnd cry',
    'gnd 哈哈，妹妹们，真会哄我呀……你们有这份心我已经很高兴了。',
    'gnd 罢了，也许这一切都是天意，难违呀。',
    'gnd 如果有缘的话，再见吧……',
    'hide character gnd',
    's 你目送着那位宫女被带走，心中愁绪郁结难平。',
    'i （可是……被验出非处的妃嫔果真就是非处吗？）',
    's 你无法不想起方才姐妹说起的，去赌坊的太监和验处的赏钱。',
    //验处频率加大部分剧情截至此
    //以下为走向BE部分剧情，过渡部分采用淡入-黑屏一会-淡出
    //场景（bg2）： 宫墙柳
    'show scene #000000',
    's ……',
    's 但你也没甚法子可想，只能被迫接受验处的周期越来越短。',
    'play sound bird',
    'show scene willow_spring with fadeIn duration 3s',
    's 从每七日到每两日，每两日到每日，每日一回到每日两回……',
    's 渐渐地，你的生活只剩下了被验处这回事。',
    's 从你的小院到太监所的路上有八百块三十四块砖，你上午数着它们到太监所，再数着它们回来，便可用午饭，歇过一刻，便要再度数着砖头过去。',
    // 宫墙柳-春（bg2-willow-spring）与宫墙柳-冬（bg2-willow-winter）交错淡入淡出，作为时间流逝效果
    'centered',
    'show scene willow_winter with fadeIn duration 2.5s',
    'centered',
    'show scene willow_spring with fadeIn duration 2.5s',
    'centered',
    's 路上的杨柳绿了又枯，枯了又绿，你渐渐不再期待杨柳依依的半路偶遇圣驾，只盼望红日高照的一天太监能少摆点脸色。',
    'centered',
    'show scene willow_winter with fadeIn duration 2.5s',
    'centered',
    'show scene willow_spring with fadeIn duration 2.5s',
    'centered',
    'show scene willow_winter with fadeIn duration 2.5s',
    'centered',
    // 宫砖（bg2#）与验处太监脸（立绘1）与手臂点变色（bg1#中的手臂点变色）交错淡入淡出重复【循环重复3次】
    'show scene brick with fadeIn duration 2.5s',
    'centered',
    's ……又不知从何时起，你不再抬头看柳树的枝条，也不再有空与姐妹们聊细碎的闲话。',
    'show character tj2 normal with fadeIn duration 2s',
    'wait 1000',
    'hide character tj2 with fadeOut duration 2s',
    's 日子只剩下青色的宫砖，',
    'show character tj2 normal with fadeIn duration 2s',
    'wait 1000',
    'hide character tj2 with fadeOut duration 2s',
    's 白色的蛊虫，',
    'show character tj2 normal with fadeIn duration 2s',
    'wait 1000',
    'hide character tj2 with fadeOut duration 2s',
    's 青白色的太监脸。',
    's 那位当初因为非处而打入冷宫的姐姐，现今究竟怎么样了呢？你无法得知她的消息。',
    's 她还在等着吗？',
    's ……',
    'show scene #000000',
    's 可是你很快就永远无法知道了。',
    's 积郁成疾，三年后，你死在了双十年华。',
    'play sound notification',
    'show message Ending-E6first',
    'centered',
    'centered ……',
    'centered ……',
    'centered ……',
    'i ……',
    'i (可是，假如一切可以重来，我是不是能做出什么改变？)',

    //解锁关卡
    {'Function':{
      'Apply':function(){
        unlock_level('level-E6-second');
      },
      'Reverse':function(){
        lock_level('level-E6-second')
      },
    }},
    's （已解锁剧情支线【宫墙绿柳红砂 2】，可以在主菜单-故事线中点击进入）',

    // 跳转至关卡选择
    {'Function':{
      'Apply':function(){
        goToLevelScreen();
      },
      'Reverse':function(){
        
      },
    }},

    // 勿删，否则重新从主菜单进入游戏的时候不会重置
    'centered',
    'jump Start',
])


/**
 * ====================================
 *【E61】E6-1剧情（后宫线二周目开头）如下
 * ====================================
 **/
monogatari.label('E61-decision', '简体中文', [
    //以下为二周目开头剧情：回到验处阁
    //场景1：太监所验处阁（bg1）
    //人物： tj1 = 大太监昌贵
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
    // 设置文本框效果
    {'Function':{
      'Apply': function () {
        setTextBoxCSS(textBoxE6);
      },

      'Reverse': function () {
        setTextBoxCSS(textBoxDefault);
      }   
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
    'show scene #000000',
    'centered',
    'play sound bird',
    'show scene nucleic with fadeIn duration 5s',
    's 睁开眼，眼前并非无间地狱。',
    's 左右是木制的桌椅，雕花的门窗，排着队的如云美女。',
    's 窗外，草长莺飞，春日正好，院子里柳树刚刚抽出新条，颜色与你手腕的新点很像。',
    'i （！真又回到了这里吗）',
    's 然而还尚未从重生的喜悦中恢复理智，你便听到熟悉的尖锐嗓音——',
    'show character tj1 normal',
    'tj1 得嘞，贵人您有闲去别处转转，咱家这里还忙着验下一位呢。',
    'hide character tj1',
    's 你眼前闪过前世无数条蛊虫的软绵绵的头与僵直的躯干，一股悲哀让你几乎呕吐出来……',
    'play sound choices',
    //进入选择：是否改命
    {
      'Choice':
      {
        'Dialog': 's 没想到竟要重来一遭，你是否要改变选择……',
        'nochange': 
          {
            'Text': '本也想逆天改命，但无奈太监掌握后宫用度的分配，不便得罪，只能重蹈这趟覆辙',
            'Do': 'jump E61A-nochange',
            //跳转到【E6-1A】E61A-nochange，重复一周目剧情
          },
        'noobey': 
          {
            'Text': '管他劳什子用度克扣，宫里总归饿不死人，不配合便是',
            'Do': 'jump E61B-noobey',
            //跳转到【E6-1B】E61B-noobey，非暴力不合作-个体种植自给自足
          },
        'protest': 
          {
              'Text': '宫中姐妹三千多号，要想法子整合她们推翻太监的作威作福',
              'Do': 'jump E61C-protest',
              //跳转到【E6-1C】E61C-protest，带领宫女抗议
          },
      }
    },
])

/**
* ====================================
*【E61】E6-1剧情（后宫线二周目开头）如下
* ====================================
**/
monogatari.label('E61A-nochange', '简体中文', [
    //以下为二周目A结局：重蹈覆辙
    // 宫墙柳-春（bg2-willow-spring）与宫墙柳-冬（bg2-willow-winter）交错淡入淡出，作为时间流逝效果
    // 宫砖（bg2#）与验处太监脸（立绘1）与手臂点变色（bg1#中的手臂点变色）交错淡入淡出重复【循环重复3次】
    // 设置文本框效果
    {'Function':{
      'Apply': function () {
        setTextBoxCSS(textBoxE6);
      },

      'Reverse': function () {
        setTextBoxCSS(textBoxDefault);
      }   
    }},
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
    // 解锁剧情线
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
    's 因为不想得罪掌管吃穿用度的太监，你选择噤声，继续着无论寒冬酷暑也要前往太监所验处的生活。',
    'centered',
    'show scene willow_winter with fadeIn duration 2.5s',
    'centered',
    'show scene willow_spring with fadeIn duration 2.5s',
    'centered',
    'show scene willow_winter with fadeIn duration 2.5s',
    'centered',
    's 你经历了与前世一模一样的一世。',
    'show scene #000000',
    's 在半年清闲日子后，太监们为了敛财上报非处，验处周期变得越来越短，你把八百三十四块砖的花纹记得更清楚了些。',
    's 三年之后，你再次死于积郁。',
    'play sound notification',
    'show message Ending-cdfz',
    'end',
    /*
    藤原：此处未设置节点跳转；需要之后补。
    此处自动跳转到本体线核酸监督【不】冲塔剧情（只能走2C这条线）（需要在核酸线的开头定义环境变量？）
    核酸线还没有转写，等核酸线设完再设置跳转节点
    */
])

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
    //人物： tj1 = 大太監昌貴
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
    'show character tj2 normal with fadeIn 3s',
    'wait 3000',
    's 等你回過神來，赫然發現面前伸著一條蠕動著的白色蠱蟲。',
    's 還尚未看清它綿軟的頭部和僵直的身軀，它就被強行地送進了你的喉嚨。', 
    'play sound stats_down',      
    'i ！咳咳咳咳',
    'hide character tj2',
    's 一道尖銳的嗓音自頭頂傳來。',
    'show character tj1 normal',
    'tj1 又不是頭一回，貴人您還沒習慣哪？',
    's 你抬頭，只見眼前是一張脂粉氣頗重的男性面孔。他戴著很高的帽子，嘴角上挑，上眼瞼耷拉著，輕蔑地看向你。',
    'i 什麼……？',
    's 你開口，驚訝地發現自己發出了一副輕柔到無力的嗓音，一副明顯不屬於你的嗓音。',
    'hide character tj1',
    's 陰柔男不耐煩地皺了皺眉，拉起你的手臂。',
    'show character gna hand_black',
    's 你順著他的目光看去，只見你的手腕處慢慢浮現出一個痣一樣的黑點，',
    'show character gna hand_green',
    's 等到完全顯現出來後，黑點又開始變色，由黑色逐漸轉變為淺綠。',
    'i （是綠色的？）',
    'hide character gna',
    'show character tj1 normal',
    'tj1 得嘞，貴人您有閑去別處轉轉，咱家這裡還忙著驗下一位呢。',
    'hide character tj1',
    // 此處依次閃過幾個畫面【閃現切換】：bg1#（暫時還無，可以暫時用驗處閣代替）
    // 手臂點變色（黑-淺綠）-> 看到閣樓內景->走路時帶起的裙擺->排著隊的後宮嬪妃->走出門：鳥鳴蝶飛宮牆春柳，顏色與手腕的點一樣
    's 你恍惚地轉身，只覺眼前的一切都無比陌生：木制的桌椅，雕花的門窗，你走路時帶起的繁複裙擺，還有排著隊的如雲美女們。',
    's 走出門，草長鶯飛，春日正好，院子裡柳樹剛剛抽出新條，顏色與你手腕的新點很像。',
    //初至異世界（驗處閣）劇情截至此處
    //以下為交代世界線部分劇情，過渡部分採用淡入-黑屏一會-淡出
    //場景2（bg2-willow-spring）：宮牆柳-春；人物：宮女a,b,c（gna gnb gnc）
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
    'show character gna smile',
    'gna 妹妹可是在叫我？',
    'i 正是。妹妹我是剛進宮的9527號，這幾日初來乍到，尚不清楚這宮中的規矩，不知姐姐可否指點一二？',
    'show character gna normal',
    'gna 哎呀！沒有人帶你熟悉宮裡的規矩麼？',
    'i 惶恐。妹妹剛來這兩日，還未見有姑姑教導禮儀。',
    'gna 怎麼回事。只聽說近來帝國後宮擴招，可沒想到新人竟多得管教不過來了。',
    'gna 這要是出了什麼紕漏……',
    'show character gna smile',
    'gna 妹妹，有什麼想知道的，你儘管問就是。',
    'i 太好了，謝謝姐姐！',
    'i 只是妹妹因為不安，一時竟連現今的年月都記不清了呢……',
    'show character gna normal',
    'gna 哎呀，也難怪。',
    'gna 別說是妹妹不記得，連我也都快記不清了喲。',
    'gna 皇上已經好久不曾臨幸後宮了。',
    'show character gna whisper',
    'gna （壓低聲音）聽說皇上身體有疾，近三年來一直纏綿病榻……',
    's 你還在消化這些資訊，一旁的兩位元宮女就插進了對話。',
    'hide character gna',
    'show character gnb normal',
    'gnb 纏綿病榻！呵呵，姐姐，你信這個呀……',
    'hide character gnb',
    'show character gnc normal',
    'gnc 就是。',
    'show character gnc titter',
    'gnc （小聲）說是皇上有疾，莫不是年紀大了，那活兒，嘻嘻……',
    'hide character gnc',
    'show character gna frightened',
    'gna ……',
    'show character gna whisper',
    'gna 放肆！這可是犯上。',
    'gna 這些話要是被人聽到了，有你們好果子吃的。',
    'hide character gna',
    'show character gnc innocent',
    'gnc 我們知道姐姐不會告密的。姐姐最好了！',
    'hide character gnc',
    's 宮女姐姐轉向你。',
    'show character gna normal',
    'gna （小聲）妹妹別聽她們胡說，在這兒亂說話可要被打入冷宮的。',
    'show character gna smile',
    'gna 對了，你不是在問今年的年號嗎？',
    'gna 今年是建康五十五年。',
    'i （五十五年……不得了，在位時間可真久啊？）',
    'i （不對，重點是建康這個年號……似乎是東漢？有五十多年這麼久嗎……）',
    'i 姐姐，恕我冒昧，現在可是大漢？',
    'show character gna normal',
    'gna ……大漢是什麼？',
    'gna 往前也沒叫這個的朝代啊？',
    'gna 現在是大杏王朝。',
    'hide character gna',
    'i （大杏王朝……是什麼架空世界嗎？）',
    'i （算了，一旦接受了這個設定……）',
    'show character gnb think',
    'gnb ……不過也不知皇上究竟是怎麼想的？明明不臨幸妃嬪，反而還擴招後宮。',
    'gnb 這樣一來，我們何時才有出頭之日？',
    'hide character gnb',
    'show character gna normal',
    'gna 國家之事，豈是我們小小宮女可以置喙的？',
    'gna 也許皇上有他不得不這樣做的考量。',
    'hide character gna',
    'show character gnc normal',
    'gnc 可皇上不僅擴招，還要驗處。從三年前開始，每七日大檢一次，查驗後宮之人是不是處女……',
    'hide character gnc',
    'show character gnb normal',
    'gnb 可不是，整整三年，有驗出過什麼東西來麼？',
    'gnb 這宮牆之內只有女人與公公，怎可能有誰平白失掉清白之身？',
    'gnb 三年了，可老實說我還是驗不慣。這勞心勞神的日子什麼時候才是個頭……',
    'hide character gnb',
    'show character gnc normal',
    'gnc 姐姐，這你就不明白了吧？',
    'show character gnc titter',
    'gnc （小聲）要是我們不招不驗，不就相當於直接昭告天下，皇上那兒不——',
    'hide character gnc',
    'show character gna whisper',
    'gna 還不快住嘴！',
    'gna 馬上就要輪到我們了，要是公公們聽見了，可不會像我這樣睜一隻眼閉一隻眼。',
    'gna 你們總覺得我事事都要管教，我可都是為了保護你們啊。',
    'show scene nucleic with fadeIn duration 3s',
    's 一陣沉默之後，你們一個個乖巧地走到驗處公公的面前張開嘴巴，迎接送到嘴裡的蠱蟲。',
    's ……',
    's 查驗結束後，你們又聚在一起，熱切地注視起自己手腕上的痣。',
    'show character gna smile',
    'gna 太好了，沒有變色。',
    'hide character gna',
    'show character gnc normal',
    'gnc 呼。我真怕它哪天突然就變紅了，到時候哪怕自己是清白的也無處說理。',
    'hide character gnc',
    'show character gnb smile',
    'gnb 妹妹，蠱術可是不會說謊的，嘻嘻……',
    'gnb 如果不做虧心事，怎會無端變色呢？',
    'hide character gnb',
    //交代世界線部分劇情截至此
    //以下為驗處頻率增大部分劇情，過渡部分採用淡入-黑屏一會-淡出
    //場景（bg1）：驗處閣門前
    //人物：三宮女（gna gnb gnc）+大太監（tj1）+被驗出非處的宮女d（gnd）
    'show scene #000000',
    's 你們一邊說笑，一邊一道向來時的路走去。',
    's 如此的日子過了半年，除開每七日便要受一遍的罪，後宮的日子倒算清閒。',
    's 你每日睡到日上三竿，空閒時還與左右院子的姐妹聊些衣裳之類的閒話。',
    'play sound bird',
    'show scene nucleic with fadeIn duration 3s',
    's 這日在排隊驗處時，你們眾姐妹又聊起了後宮太監們的閒話。',
    'show character gnc normal',
    'gnc 你們聽聞了嗎？前日驗處的小德子在宮外賭坊被砍手了……',
    'hide character gnc',
    'show character gna normal',
    'gna 他是如何出宮的？',
    'hide character gna',
    'show character gnb normal',
    'gnb 出宮倒是沒甚稀奇，蠱蟲的養料總需要人採辦。',
    'gnb 我聽聞他們有時爭採辦名額甚至會打起來呢，原來是要借採辦出去快活呀。',
    'hide character gnb',
    'show character gnc normal',
    'gnc 正是如此。',
    'gnc 那小德子拿了十兩銀子去賭，最後可是輸了莊家整二百兩呢……',
    'hide character gnc',
    'i 他哪來的十兩銀子？',
    'show character gnb smile',
    'gnb 哪來的……當然是驗處的賞錢，驗得多拿得多。',
    'gnb 小德子是昌貴最疼的乾兒子，給他分的驗處名額最多，一月四回下來，攢個十兩有何難的。',
    'hide character gnb',
    'show character gnc titter',
    'gnc 是這個理，比起爭採辦，他們爭起驗處的名額來可更厲害呢！',
    'hide character gnc',
    'show character gna normal',
    'gna 都說後宮女人勾心鬥角，誰承想在咱們這兒，這戲還輪不到咱們來唱呢。',
    'hide character gna',
    'play sound footsteps',
    's 你們正說著話，一陣腳步聲傳來，大太監昌貴在乾兒子們的簇擁下忽然出現。',
    's 昌貴用不哭不笑的臉皮和不冷不熱的語氣讓乾兒子們退下，然後面向眾人清了清嗓子。',
    'show character tj1 normal',
    'tj1 （咳嗽兩聲）貴人們，雜家今日叨擾，是來立個新規矩。',
    'tj1 咱們這後宮，出了件醜事……上回，有嬪妃被驗出非處。',
    'tj1 醜事不宜聲張，各位心裡有數，懂事自愛即可。',
    'tj1 但為了醜事不再發生，自今日起，咱們的驗處增加為兩日一回，望各位貴人互相轉達。',
    'tj1 ……得，雜家別處還有雜事，就先退下了。',
    'hide character tj1',
    's 宮女們聞言一片譁然。',
    'show character gna normal',
    'gna 奇了怪了。這怎麼可能？',
    'hide character gna',
    'show character gnc normal',
    'gnb 簡直胡扯……宮牆之內連男根都沒有，怎麼可能出現非處呢？',
    'hide character gnc',
    'show character gna normal',
    'gna 就是呀。莫非真的有姐妹不守規矩，偷偷去與那不知來路的野小子幽會……',
    'hide character gna',
    'show character gnb normal',
    'gnb 哎呀！想不到宮牆之中，竟也有這般不知羞恥之人。',
    'gnb 自己不守規矩也就算了，還要害得我們每週多驗兩回。',
    'hide character gnb',
    'show character gna normal',
    'gna 可是後宮防衛如此森嚴，就算有人要幽會，他們又是怎麼碰面的呢？莫非是插了翅膀不成？',
    'hide character gna',
    'show character gnc normal',
    'gnc ……姐姐們可真是心善，怎麼就知道壞了規矩的是牆外之人呢？',
    'gnc 你們看每日在後宮進進出出的，除了太監還有誰？',
    'gnc （小聲）要是哪個公公沒閹乾淨……',
    'hide character gnc',
    's 宮女們一下子變得臉色煞白。',
    'show character gna frightened',
    'gna 你是說，監守自——',
    'show character gna whisper',
    'gna ……',
    'hide character gna',
    'show character gnb normal',
    'gnb ……',
    'hide character gnb',
    'i ……',
    'show character gnc normal',
    'gnc ……哎呀。姐姐們臉色怎麼都這麼可怕！姐姐們知道我一向口無遮攔，開玩笑罷了。罪過罪過……',
    'hide character gnc',
    's 你們自顧自小聲議論著。昌貴沒有正眼瞧你們，在乾兒子哈著腰的目送中向院外走去。',
    'i （不行，我得問點什麼。）',
    'play sound footsteps',
    'i 鄭公公留步！',
    'show character tj1 normal',
    'i 可否允許我問一句？被驗出非處的究竟是……',
    'tj1 ……這位貴人，沒有人教過你規矩麼？此等不光彩之事，斷不應如此大聲議論。',
    'tj1 ……還是說貴人也想和那位一樣，到冷宮裡修身養性一陣呀？',
    's 昌貴瞥了旁邊的宮女一眼，你順著他的眼神看過去，只見一位宮女眼神躲閃，手不自覺地捂上了手腕的位置。',
    'hide character tj1',
    'i （莫非這就是驗出了非處的那位……）',
    'show character gnd cry',
    'gnd ……不是的……',
    'hide character gnd',
    'show character tj1 normal',
    'tj1 雜家有事先行一步。如各位安分守己，自然會有享福之日，而逾矩之人將馬上受到處置。希望各位好自為之。',
    'hide character tj1',
    's 昌貴說罷揚長而去。',
    'show character gnc normal',
    'gnc 欺人太甚，他簡直把咱們看得比奴才還輕。',
    'hide character gnc',
    'show character gna whisper',
    'gna 宮牆之內誰人不知，如若恩寵永不臨，咱們豈不就是比奴才還輕賤麼……入宮時就早已註定。',
    'hide character gna',
    'i 可話說回來，剛才那位姐姐……',
    'show character gnd cry',
    'gnd 我是清白的……',
    'hide character gnd',
    'show character gna normal',
    'gna 好妹妹，我相信你。',
    'gna ……可是你回憶下，是不是什麼時候不小心碰到不認識的男人了，或許碰了手，搭了肩什麼的？畢竟蠱術這麼久以來也不曾出過錯……',
    'hide character gna',
    'show character gnd cry',
    'gnd 呵。可笑……我真的什麼也不曾做，要我如何自證沒做過的事情？',
    'show character gnd scared',
    'gnd 蒼天可鑒，我一刻也不曾背叛過皇上……',
    'gnd 究竟是蠱術錯了，還是我錯了？',
    'gnd 如果連姐姐們也不相信我，我只得以死——',
    'hide character gnd',
    'show character gna normal',
    'gna 妹妹莫衝動呀！',
    'hide character gna',
    'show character gnc normal',
    'gnc 就是就是！就憑那太監的一面之辭，何至於此。',
    'hide character gnc',
    'show character gnd cry',
    'gnd 只是，要將我打入冷宮的決議，恐怕難以改變……',
    'i 是啊，恐怕姐姐要受些苦了。可是留得青山在，不怕沒柴燒嘛，苟且偷生也好過早早折在這裡。',
    'gnd 我怎麼會不知道？可是這一旦被打入冷宮，我的餘生都要在屈辱和嘲笑中度過……',
    'gnd 還不如索性……',
    'i ……姐姐，接下來的日子一定很苦。',
    'i 可是公道自在人心，總有一日會還你清白的。',
    'hide character gnd',
    'show character gnc normal',
    'gnc 這後宮之中有誰敢說你的閒話，我們第一個不放過！',
    'hide character gnc',
    'show character gnd cry',
    'gnd 哈哈，妹妹們，真會哄我呀……你們有這份心我已經很高興了。',
    'gnd 罷了，也許這一切都是天意，難違呀。',
    'gnd 如果有緣的話，再見吧……',
    'hide character gnd',
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
    'show character tj2 normal with fadeIn duration 2s',
    'wait 1000',
    'hide character tj2 with fadeOut duration 2s',
    's 日子只剩下青色的宮磚，',
    'show character tj2 normal with fadeIn duration 2s',
    'wait 1000',
    'hide character tj2 with fadeOut duration 2s',
    's 白色的蠱蟲，',
    'show character tj2 normal with fadeIn duration 2s',
    'wait 1000',
    'hide character tj2 with fadeOut duration 2s',
    's 青白色的太監臉。',
    's 那位當初因為非處而打入冷宮的姐姐，現今究竟怎麼樣了呢？你無法得知她的消息。',
    's 她還在等著嗎？',
    's ……',
    'show scene #000000',
    's 可是你很快就永遠無法知道了。',
    's 積郁成疾，三年後，你死在了雙十年華。',
    'play sound notification',
    'show message Ending-E6first',
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
  //人物： tj1 = 大太監昌貴
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
  'show character tj1 normal',
  'tj1 得嘞，貴人您有閑去別處轉轉，咱家這裡還忙著驗下一位呢。',
  'hide character tj1',
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
  'show message Ending-cdfz',
  'end',
  /*
  藤原：此處未設置節點跳轉；需要之後補。
  此處自動跳轉到本體線核酸監督【不】沖塔劇情（只能走2C這條線）（需要在核酸線的開頭定義環境變數？）
  核酸線還沒有轉寫，等核酸線設完再設置跳轉節點
  */
])


