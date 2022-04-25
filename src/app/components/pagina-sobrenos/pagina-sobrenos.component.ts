import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-sobrenos',
  templateUrl: './pagina-sobrenos.component.html',
  styleUrls: ['./pagina-sobrenos.component.css']
})
export class PaginaSobrenosComponent implements OnInit {

  editForm: string

  constructor() {
    this.editForm = 'edit1';
  }


  ngOnInit(): void {
  }

  changeInformations(type: string) {
    switch (type) {
      case 'edit1':
        this.editForm = 'edit1';
        break;
      case 'edit2':
        this.editForm = 'edit2';
        break;
      case 'edit3':
        this.editForm = 'edit3';
        break;
      case 'edit4':
        this.editForm = 'edit4';
        break;

      default:
        break;
    }
    console.log(this.editForm);
  }

}
