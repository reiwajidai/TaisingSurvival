'use strict';
/* global Monogatari */

/**
 * =============================================================================
 * This is the file where you should put all your custom JavaScript code,
 * depending on what you want to do, there are 3 different places in this file
 * where you can add code.
 *
 * 1. Outside the $_ready function: At this point, the page may not be fully
 *    loaded yet, however you can interact with Monogatari to register new
 *    actions, components, labels, characters, etc.
 *
 * 2. Inside the $_ready function: At this point, the page has been loaded, and
 *    you can now interact with the HTML elements on it.
 *
 * 3. Inside the init function: At this point, Monogatari has been initialized,
 *    the event listeners for its inner workings have been registered, assets
 *    have been preloaded (if enabled) and your game is ready to be played.
 *
 * You should always keep the $_ready function as the last thing on this file.
 * =============================================================================
 **/

const { $_ready, $_ } = Monogatari;

// 1. Outside the $_ready function:


$_ready (() => {
	// 2. Inside the $_ready function:
	
	// 调试用的代码
	// monogatari.debug.level (5);

	// Add new component
	monogatari.registerComponent(LevelScreen);

	//增加繁体中文ui
	monogatari.translation ('繁體中文', {
		'AdvanceHelp': '點按滑鼠左鍵、輕觸螢幕、或按空白鍵繼續遊戲',
		'AllowPlayback': '點擊以批准播放聲效',
		'Audio': '聲效',
		'AutoPlay': '自動',
		'AutoPlayButton': '進入自動播放模式',
		'AutoPlaySpeed': '自動播放速度',
	
		'Back': '返回',
		'BackButton': '返回',
	
		'Cancel': '取消',
		'Close': '關閉',
		'Confirm': '你確定要離開了嗎？',
		'Credits': '製作名單',
	
		'Delete': '刪除',
		'DialogLogButton': '顯示對話紀錄',
	
		'FullScreen': '全螢幕',
	
		'Gallery': '畫廊',
	
		'Help': '幫助',
		'Hide': '隱藏',
		'HideButton': '隱藏對話框',
	
		'iOSAudioWarning': '在ios上無法支援聲效設定',
	
		'KeyboardShortcuts': '鍵盤快捷鍵',
	
		'Language': '語言',
		'Load': '載入進度',
		'LoadAutoSaveSlots': '自動保存進度',
		'LoadButton': '打開載入進度的界面',
		'Loading': '載入中',
		'LoadingMessage': '媒體加載中，請稍候',
		'LoadSlots': '遊戲存檔',
		'LocalStorageWarning': '瀏覽器不支援 Local Storage 功能',
		'Log': '紀錄',
	
		'Music': '音樂音量',
	
		'NewContent': '有新的遊戲內容上線，請重新載入本頁，以取得最新版本',
		'NoSavedGames': '沒有已保存的進度',
		'NoAutoSavedGames': '沒有自動保存的進度',
		'NoDialogsAvailable': '沒有對話。若場景有對話，將會在這裏顯示。',
	
		'OK': 'OK',
		'OrientationWarning': '請旋轉你的裝置以進行遊戲',
		'Overwrite': '覆蓋存檔',
	
		'QuickButtons': '快速選單鍵',
		'QuickMenu': '快速選單',
		'Quit': '離開',
		'QuitButton': '離開遊戲',
	
		'Resolution': '解像度',
	
		'Save': '保存進度',
		'SaveButton': '開啟存檔介面',
		'SaveInSlot': '在這位置保存遊戲',
		'SelectYourLanguage': '選擇語言',
		'Settings': '設定',
		'SettingsButton': '開啟設定介面',
		'Show': '顯示',
		'Skip': '快轉',
		'SkipButton': '進入快轉模式',
		'SlotDeletion': '你是否確定要刪除這個位置的存檔？',
		'SlotOverwrite': '你是否確定要覆蓋這個位置的存檔？',
		'Sound': '聲音音量',
		'Start': '開始',
		'Stop': '停止',
	
		'TextSpeed': '文字速度',
	
		'Video': '影片音量',
		'Voice': '語音音量',
	
		'Windowed': '視窗'
	});
	monogatari.languageMetadata ("繁體中文", {
		"code": "zh",
		"icon": "🇲🇽"
	});

	monogatari.init ('#monogatari').then (() => {
		// 3. Inside the init function:

		// 读取存储进度并再次进入游戏后，如果要回滚到存档点前的游戏状态，就会报错
		// 这个问题从5月3号的版本开始就存在了
		// 实在解决不了，不如禁掉回滚操作吧
		// This will remove the "Back" button from the quick menu
		monogatari.component ('quick-menu').removeButton ('Back');

		// 隐藏默认的开始游戏按钮
		monogatari.component ('main-menu').removeButton ('Start');

		// This will disable the left key listener to roll back
		monogatari.unregisterListener ('back');

		// 增加UI界面的中文翻译
		monogatari.translation ('简体中文', {
			'Gallery': '画廊',
			'Settings': '游戏设置',
			'Credits': '制作名单',
		});

		// 在主界面加入新的页面元素logo
		monogatari.component ('main-screen').template (() => {
			return `
				<game-logo-container></game-logo-container>
				<main-menu></main-menu>
			`;
		});

		// 随机主界面
		// 正式版界面
		/* let main_screen_element = document.querySelector("main-screen.animated");
		let screen_num = Math.floor(Math.random() * 2.99)
		let screen_link = [`url("./assets/images/main_menu.png")`, `url("./assets/images/main_menu_2.png")`, `url("./assets/images/main_menu_3.png")`]
		main_screen_element.style.backgroundImage = screen_link[screen_num]; */
		// 先行版界面
		let main_screen_element = document.querySelector("main-screen.animated");
		let screen_num = Math.floor(Math.random() * 2.99)
		let screen_link = [`url("./assets/images/main_menu_E6.png")`,`url("./assets/images/main_menu_E6.png")`,`url("./assets/images/main_menu_E6.png")`]
		main_screen_element.style.backgroundImage = screen_link[screen_num];
		main_screen_element.style.backgroundPosition = "center";


		// 修复credits界面标题不是中文的问题
		const credit_title = document.querySelector ('credits-screen [data-content="title"]');
		credit_title.innerHTML = '<h2 data-string="Credits" data-content="title">制作名单</h2>';

		// 解锁游戏开端
		unlock_level('E60-BE');

	});
	
	// 加载游戏存档之后
	monogatari.on ('didLoadGame', () => {
		// Load saved CSS for text box
		setTextBoxCSS(getTextBoxCSS());
	});
});
