import { Component, Input } from '@angular/core';
import { Camera, CameraResultType, CameraSource, ImageOptions, Photo } from '@capacitor/camera';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  imports: [IonButton],
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  standalone: true,
})
export class ExploreContainerComponent {
  @Input() name?: string;


  async pickImage() {
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
              console.log('getPhoto', photo.dataUrl);

            })
        }
      })
  }
}
