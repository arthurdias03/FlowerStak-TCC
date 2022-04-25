import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { bigModal, mediumModal } from '../../../utils/modal-size';
import { ModalFecharCompraComponent } from '../models/modal-fecharcompra/modal-fecharcompra.component';
import { ModalPersonalizacaoComponent } from '../models/modal-personalizacao/modal-personalizacao.component';

@Component({
  selector: 'app-pagina-carrinho',
  templateUrl: './pagina-carrinho.component.html',
  styleUrls: ['./pagina-carrinho.component.css']
})
export class PaginaCarrinhoComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(ModalFecharCompraComponent, {
      ...bigModal
    });
  }

}
