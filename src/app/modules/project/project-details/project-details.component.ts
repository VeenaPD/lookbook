import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/core/interfaces/project.interface';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  id: any;
  data: any = [];
  projectData: Project = {
    id: 0,
    image: '',
    name: '',
    shortDescription: '',
    url: '',
    status: ''
  };
  private sub: any;
  constructor(private sharedService: SharedService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });

    this.sharedService.getHomePageData().subscribe(data => {
      this.projectData = data.portfolioProjectsData.filter((a: { id: any; }) => a.id == this.id)[0];      
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
