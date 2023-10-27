import { Component } from '@angular/core';
import { IonicModule, Platform } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import { App, AppInfo } from '@capacitor/app';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab1Page {
  appInfo?: AppInfo;
  constructor(private platform: Platform) {
    this.getAppVersion();
  }
  getAppVersion() {
    if (this.platform.is('hybrid')) {
      App.getInfo().then((d) => {
        this.appInfo = d;
      });
    }
  }
}
