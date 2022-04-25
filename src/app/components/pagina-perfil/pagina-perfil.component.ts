import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../../../models/pedidos';

@Component({
  selector: 'app-pagina-perfil',
  templateUrl: './pagina-perfil.component.html',
  styleUrls: ['./pagina-perfil.component.css']
})
export class PaginaPerfilComponent implements OnInit {

  changeForm: string;
  produtos: Array<Pedidos>;

  constructor() {
    this.changeForm = 'DadosPessoais'
    this.produtos = new Array<Pedidos>();
  }

  ngOnInit(): void {
    this.setValuesProdutos();
  }

  setValuesProdutos() {
    this.produtos = [
      {
        activeToggle: true,
        FormaPagamento: 'credito',
        dataPedido: '20/07/2021',
        numeroPedido: '0001',
        produtos: [
          {
            nomeProduto: 'Rosa',
            valorUnitProduto: 'R$ 200',
            quantidadeProduto: '3',
            valorTotal: 'R$ 300',
          },
          {
            nomeProduto: 'Margarida',
            valorUnitProduto: 'R$ 200',
            quantidadeProduto: '3',
            valorTotal: 'R$ 300',
          },
          {
            nomeProduto: 'Dente-de-Leão',
            valorUnitProduto: 'R$ 200',
            quantidadeProduto: '3',
            valorTotal: 'R$ 300',
          },
        ],
        valorTotalProdutos: 'R$ 30,00',
        valorFrete: 'R$ 30,00',
        valorTotalComFrete: 'R$ 37,00',
      }
    ]
  }

  switchForm(value: string) {
    switch (value) {
      case 'DadosPessoais':
        this.changeForm = 'DadosPessoais'
        break;
      case 'Pedidos':
        this.changeForm = 'Pedidos'
        break;
      case 'AlterarSenha':
        this.changeForm = 'AlterarSenha'
        break;

      default:
        break;
    }
  }

}
