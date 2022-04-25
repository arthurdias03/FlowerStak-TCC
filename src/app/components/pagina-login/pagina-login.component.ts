import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.component.html',
  styleUrls: ['./pagina-login.component.css']
})
export class PaginaLoginComponent implements OnInit {

  switchMode: boolean;

  constructor() {
    this.switchMode = false;
   }

  ngOnInit(): void {
  }
  
  ChangeMode() {
    this.switchMode = !this.switchMode;
  }
}
