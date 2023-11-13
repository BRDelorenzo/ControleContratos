import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormContratoDialogComponent } from './components/form-contrato-dialog/form-contrato-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ControleContratos';
  constructor(public dialog: MatDialog){

  }

  ngOnInit(): void {
    
  }

  addLive(): void {
    const dialogRef = this.dialog.open(FormContratoDialogComponent, {
      width: '950px',
      height:'650px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }
}
