import { CUSTOM_ELEMENTS_SCHEMA, Component, EnvironmentInjector, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [
    CommonModule,
    IonApp,
    IonRouterOutlet
  ],
})
export class AppComponent {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
  }
}
