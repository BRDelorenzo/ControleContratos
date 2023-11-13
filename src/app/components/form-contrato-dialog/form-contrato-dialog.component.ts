import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-form-contrato-dialog',
  templateUrl: './form-contrato-dialog.component.html',
  styleUrl: './form-contrato-dialog.component.css',
})
export class FormContratoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FormContratoDialogComponent>){

  }

  ngOnInit(): void {
    
  }
  cancel(): void {
    this.dialogRef.close();
  }

}
