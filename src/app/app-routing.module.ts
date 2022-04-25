import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { PaginaSobrenosComponent } from './components/pagina-sobrenos/pagina-sobrenos.component';
import { PaginaFloresComponent } from './components/pagina-flores/pagina-flores.component';
import { PaginaContatoComponent } from './components/pagina-contato/pagina-contato.component';
import { PaginaLoginComponent } from './components/pagina-login/pagina-login.component';
import { PaginaPerfilComponent } from './components/pagina-perfil/pagina-perfil.component';
import { PaginaCarrinhoComponent } from './components/pagina-carrinho/pagina-carrinho.component';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent },
  { path: 'inicio', component: PaginaInicialComponent },
  { path: 'flores', component: PaginaFloresComponent },
  { path: 'sobrenos', component: PaginaSobrenosComponent },
  { path: 'contato', component: PaginaContatoComponent },
  { path: 'login', component: PaginaLoginComponent },
  { path: 'meuperfil', component: PaginaPerfilComponent },
  { path: 'carrinho', component: PaginaCarrinhoComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
