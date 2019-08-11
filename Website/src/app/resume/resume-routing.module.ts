import { NgModule } from '@angular/core';
import { ResumeComponent } from './resume.component';
import { RouterModule, Routes } from '@angular/router';

const resumeRoutes: Routes = [
  { path: 'resume', component: ResumeComponent, data: { animation: 'ResumePage' } },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(
      resumeRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class ResumeRoutingModule { }
