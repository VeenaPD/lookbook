import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/core/interfaces/project.interface';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any = [];
  appsProjects: Project[] = [];
  websitesProjects: Project[] = [];

  projectBlock: any[] = [];

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getHomePageData().subscribe(data => {
      this.data = data;

      this.appsProjects = data.portfolioProjectsData.filter((project: { category: string; }) => project.category === "apps");
      this.websitesProjects = data.portfolioProjectsData.filter((project: { category: string; }) => project.category === "websites");

      this.projectBlock = [
        {
          "label": "Apps",
          "projects": this.appsProjects
        },
        {
          "label": "Websites",
          "projects": this.websitesProjects
        }
      ]
    });
  }

}
