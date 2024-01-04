import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { ComponentsModule } from 'src/app/components/components.module';
import {MatTabsModule} from '@angular/material/tabs';


const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule
  ],
  exports: [RouterModule, ComponentsModule, HomeComponent, MatToolbarModule, MatButtonModule, MatIconModule, MatTabsModule]
})
export class HomeModule { }
