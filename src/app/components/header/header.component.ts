import { Component, Input } from '@angular/core';
import { Shared } from 'src/app/core/interfaces/shared.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input('headerData') headerData: Shared = {
    title: '',
    buttons: []
  }
}
