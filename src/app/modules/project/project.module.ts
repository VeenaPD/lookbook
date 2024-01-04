import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import {MatChipsModule} from '@angular/material/chips';

const routes: Routes = [
  { path: ':id', component: ProjectDetailsComponent }
];

@NgModule({
  declarations: [
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes),
    MatChipsModule,
  ],
  exports: [
    RouterModule,
    ComponentsModule,
    MatChipsModule
  ]
})
export class ProjectModule { }
