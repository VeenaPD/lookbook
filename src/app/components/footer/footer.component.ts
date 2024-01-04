import { Component, Input } from '@angular/core';
import { Shared } from 'src/app/core/interfaces/shared.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @Input('footerData') footerData: Shared = {
    title: '',
    buttons: []
  }
  computeCurrentYear(): Number {
    const dateVal = new Date();
    return dateVal.getFullYear();
  }
}
