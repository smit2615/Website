import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { SharedModule } from '../shared/shared.module';
import { ProjectsComponent } from '../projects/projects.component';

@NgModule({
  declarations: [HomeComponent, ProjectsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    ProjectsComponent,
    HomeRoutingModule
  ]
})
export class HomeModule { }
