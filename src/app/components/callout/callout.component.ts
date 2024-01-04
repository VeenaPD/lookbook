import { Component, Input } from '@angular/core';
import { CallOut } from 'src/app/core/interfaces/call-out.interface';

@Component({
  selector: 'app-callout',
  templateUrl: './callout.component.html',
  styleUrls: ['./callout.component.scss']
})
export class CalloutComponent {
  @Input('calloutTemplateData') calloutTemplateData: CallOut = {
    title: '',
    subtitle: '',
    buttonText: '',
    buttonUrl: '',
    buttonIcon: ''
  }; 
}
