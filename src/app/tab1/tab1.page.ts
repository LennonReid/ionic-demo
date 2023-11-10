import { Component } from '@angular/core';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import { Camera, CameraResultType, CameraSource, ImageOptions, Photo } from '@capacitor/camera';
import { IonButton, IonContent, IonHeader, IonItem, IonList, IonTitle, IonToolbar, LoadingController } from '@ionic/angular/standalone';

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
    IonList,
    IonItem,
    IonButton,
    ExploreContainerComponent
  ],
})
export class Tab1Page {
  constructor(
    private loadingController: LoadingController,
  ) {
  }

  async presentLoading(msg: string): Promise<HTMLIonLoadingElement> {
    const loading = await this.loadingController.create({
      message: msg,
    });
    await loading.present();
    return loading;
  }
  async pickImage() {
    // Camera.requestPermissions does not work when loading is present.
    const getPictureLoading = await this.presentLoading('waiting');
    const options = {
      quality: 50,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos,
    } as ImageOptions;
    await Camera.requestPermissions({ permissions: ['photos'] }).then(
      async (permissionResult) => {
        if (permissionResult.photos === 'granted' || permissionResult.photos === 'limited') {
          await Camera.getPhoto(options).then(
            async (photo: Photo) => {
              getPictureLoading.dismiss();
              console.log('getPhoto', photo.dataUrl);
            },
            async () => {
              getPictureLoading.dismiss();
            }
          )
        } else {
          getPictureLoading.dismiss();
        }
      })
  }
}
