import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project';
import {MatDialog } from '@angular/material/dialog';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() project: Project;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProjectDialogComponent, {
      width: '250px',
      data: {content: this.project.additionalContent}
    });
  }

}
