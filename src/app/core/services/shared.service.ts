import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import * as homePageData from '../../app-data/home-data.json';
import * as mentorPageData from '../../app-data/mentorship-data.json';
import * as sharedData from '../../app-data/shared-data.json';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  getHomePageData(): Observable<any> {
    return of(homePageData);
  }

  getMentorshipPageData(): Observable<any> {
    return of(mentorPageData);
  }

  getSharedData(): Observable<any> {
    return of(sharedData)
  }
}
