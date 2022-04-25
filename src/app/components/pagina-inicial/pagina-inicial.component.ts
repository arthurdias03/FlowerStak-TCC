import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css'],
})
export class PaginaInicialComponent implements OnInit {
  
  imagepath1 = '/assets/images/paginainicial/florcapa1.jpg';
  imagepath2 = '/assets/images/paginainicial/florcapa2.jpeg';
  imagepath3 = '/assets/images/paginainicial/florcapa3.jpg' ;

  itens = [
    {
      id: '0',
      imgpath: '/assets/images/paginainicial/card1.jpg',
      nome: 'Buquê',
      valor: 'R$ 200,00',
    },
    {
      id: '0',
      imgpath: '/assets/images/paginainicial/card2.jpg',
      nome: 'Buquê',
      valor: 'R$ 200,00',
    },
    {
      id: '0',
      imgpath: '/assets/images/paginainicial/card3.jpg',
      nome: 'Buquê',
      valor: 'R$ 200,00',
    },
  ]

  constructor() {}

  ngOnInit(): void {}
}
