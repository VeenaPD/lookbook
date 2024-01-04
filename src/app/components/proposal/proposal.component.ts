import { Component, Input } from '@angular/core';
import { Banner } from 'src/app/core/interfaces/banner.interface';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent {
  @Input('proposalItem') proposalItem: Banner = {
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
