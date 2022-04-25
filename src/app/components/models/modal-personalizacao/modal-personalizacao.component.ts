import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'modal-personalizacao',
  templateUrl: './modal-personalizacao.component.html',
  styleUrls: ['./modal-personalizacao.component.css']
})
export class ModalPersonalizacaoComponent implements OnInit {

  steps: string;

  constructor(private dialogRef: MatDialogRef<ModalPersonalizacaoComponent>) {
    this.steps = '1';
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
