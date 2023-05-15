import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';



@Component({
  selector: 'child-modal',
  templateUrl:  'modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
