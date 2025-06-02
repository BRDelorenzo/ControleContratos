import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-contrato-dialog',
  templateUrl: './form-contrato-dialog.component.html',
  styleUrl: './form-contrato-dialog.component.css',
})
export class FormContratoDialogComponent implements OnInit {
  contratoForm: FormGroup;
  tiposContrato = [
    'Prestação de Serviços',
    'Fornecimento',
    'Locação',
    'Consultoria',
    'Outros'
  ];

  constructor(
    public dialogRef: MatDialogRef<FormContratoDialogComponent>,
    private fb: FormBuilder
  ) {
    this.contratoForm = this.fb.group({
      numeroContrato: ['', Validators.required],
      nomeContratado: ['', Validators.required],
      cnpjContratado: ['', Validators.required],
      tipoContrato: ['', Validators.required],
      valorContrato: ['', [Validators.required, Validators.min(0)]],
      dataInicio: ['', Validators.required],
      dataFim: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  cancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.contratoForm.valid) {
      console.log(this.contratoForm.value);
      this.dialogRef.close(this.contratoForm.value);
    }
  }
}