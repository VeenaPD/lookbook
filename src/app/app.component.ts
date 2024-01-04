import { Component, OnInit } from '@angular/core';
import { SharedService } from './core/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any = [];
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getSharedData().subscribe(data => {
      this.data = data;
    });
  }

}
