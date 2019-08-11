import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { SharedModule } from '../shared/shared.module';
import { ProjectsComponent } from '../projects/projects.component';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';

@NgModule({
  declarations: [HomeComponent, ProjectsComponent, ProjectCardComponent, ProjectDialogComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    ProjectsComponent,
    ProjectCardComponent,
    ProjectDialogComponent,
    HomeRoutingModule
  ],
  entryComponents: [
    ProjectDialogComponent
  ]
})
export class HomeModule { }
