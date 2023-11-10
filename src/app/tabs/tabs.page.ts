import { CUSTOM_ELEMENTS_SCHEMA, Component, EnvironmentInjector, inject } from '@angular/core';
import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  ellipse,
  square,
  triangle,
} from 'ionicons/icons';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);


  readonly iconMaps: any = {
    triangle,
    ellipse,
    square
  };
  constructor() {
    addIcons(this.iconMaps)
  }
}
