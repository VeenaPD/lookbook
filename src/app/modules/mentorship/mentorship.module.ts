import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorshipComponent } from './mentorship.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatTabsModule } from '@angular/material/tabs';

const routes: Routes = [
  { path: '', component: MentorshipComponent }
];

@NgModule({
  declarations: [
    MentorshipComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes),
    MatTabsModule
  ],
  exports: [
    RouterModule,
    ComponentsModule,
    MentorshipComponent,
    MatTabsModule

  ]
})
export class MentorshipModule { }
