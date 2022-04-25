import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'modal-fecharcompra',
  templateUrl: './modal-fecharcompra.component.html',
  styleUrls: ['./modal-fecharcompra.component.css']
})
export class ModalFecharCompraComponent implements OnInit {

  steps: string;

  constructor(private dialogRef: MatDialogRef<ModalFecharCompraComponent>) {
    this.steps = '1';
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
