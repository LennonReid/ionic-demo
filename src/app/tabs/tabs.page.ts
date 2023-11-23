import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonButton, IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonButton,
    IonIcon,
    IonLabel
  ],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() { }
}
