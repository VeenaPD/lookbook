import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-mentorship',
  templateUrl: './mentorship.component.html',
  styleUrls: ['./mentorship.component.scss']
})
export class MentorshipComponent implements OnInit {
  data: any = [];
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getMentorshipPageData().subscribe(data => {
      this.data = data;
    });
  }

}
