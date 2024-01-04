import { Component, Input } from '@angular/core';
import { About } from 'src/app/core/interfaces/about.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
 @Input('aboutTemplateData') aboutTemplateData: About = {
   title: '',
   subtitle: ''
 }; 
}
