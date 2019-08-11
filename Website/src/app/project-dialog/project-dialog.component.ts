import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ProjectDialogData {
  content: string;
}

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.css']
})
export class ProjectDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProjectDialogData) {}

  close(): void {
    this.dialogRef.close();
  }

  ngOnInit() {

  }

}
