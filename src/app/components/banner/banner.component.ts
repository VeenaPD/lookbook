import { Component, Input } from '@angular/core';
import { Banner } from 'src/app/core/interfaces/banner.interface';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input('bannerData') bannerData: Banner = {
    title: '',
    subtitle: '',
    buttonText1: '',
    buttonUrl1: '',
    buttonIcon1: '',
    buttonText2: '',
    buttonUrl2: '',
    buttonIcon2: ''
  };
}
