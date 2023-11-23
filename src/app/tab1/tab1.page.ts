import { Component } from '@angular/core';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import { App, AppInfo } from '@capacitor/app';
import { IonContent, IonHeader, IonTitle, IonToolbar, Platform } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent],
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
