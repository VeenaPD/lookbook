import { Component, Inject, OnInit } from '@angular/core';
import { SharedService } from './core/services/shared.service';
import { NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

declare const gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any = [];
  constructor(private sharedService: SharedService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.sharedService.getSharedData().subscribe(data => {
      this.data = data;
    });
    this.handleRouteEvents();
  }

  handleRouteEvents() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('event', 'page_view', {
          page_title: event.urlAfterRedirects === "/" ? "Home" : event.urlAfterRedirects.slice(1),
          page_path: event.urlAfterRedirects,
          page_location: this.document.location.href
        })
      }
    });
  }

}
