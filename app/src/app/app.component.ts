import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {
	public appPages = [
		{ title: 'Home', url: '/home', icon: 'home' },
		{ title: 'List', url: '/list', icon: 'list' },
		{ title: 'Game 1', url: '/game/1', icon: 'game' },
		{ title: 'Game 2', url: '/game/2', icon: 'game' },
		{ title: 'Game 3', url: '/game/3', icon: 'game' },
		{ title: 'Game 4', url: '/game/4', icon: 'game' },
		{ title: 'Game 5', url: '/game/5', icon: 'game' },
		{ title: 'Game 6', url: '/game/6', icon: 'game' },
		{ title: 'Game 7', url: '/game/7', icon: 'game' },
		{ title: 'Game 8', url: '/game/8', icon: 'game' },
		{ title: 'Game 9', url: '/game/9', icon: 'game' }
	];

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}
}
