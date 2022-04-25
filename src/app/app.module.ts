
// COMPONENTES DO ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';

// COMPONENTES
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { PaginaLoginComponent } from './components/pagina-login/pagina-login.component';
import { PaginaContatoComponent } from './components/pagina-contato/pagina-contato.component';
import { PaginaCarrinhoComponent } from './components/pagina-carrinho/pagina-carrinho.component';
import { PaginaSobrenosComponent } from './components/pagina-sobrenos/pagina-sobrenos.component';
import { PaginaFloresComponent } from './components/pagina-flores/pagina-flores.component';
import { PaginaPerfilComponent } from './components/pagina-perfil/pagina-perfil.component';
import { MenuGeralComponent } from './components/menu-geral/menu-geral.component';
import { MenuFooterComponent } from './components/menu-footer/menu-footer.component';
import { ModalFecharCompraComponent } from './components/models/modal-fecharcompra/modal-fecharcompra.component';
import { ModalPersonalizacaoComponent } from './components/models/modal-personalizacao/modal-personalizacao.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    PaginaContatoComponent,
    PaginaLoginComponent,
    PaginaCarrinhoComponent,
    PaginaSobrenosComponent,
    PaginaFloresComponent,
    PaginaPerfilComponent,
    MenuGeralComponent,
    MenuFooterComponent,
    ModalFecharCompraComponent,
    ModalPersonalizacaoComponent,
  ],
  exports: [
    MenuGeralComponent,
    MenuFooterComponent,
    ModalFecharCompraComponent,
    ModalPersonalizacaoComponent,
  ],
  imports: [
    MatSidenavModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    NgbModule,
    MatGridListModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    PaginaInicialComponent,
    PaginaContatoComponent,
    PaginaLoginComponent,
    PaginaCarrinhoComponent,
    PaginaSobrenosComponent,
    PaginaFloresComponent,
    PaginaPerfilComponent,
    MenuGeralComponent,
    MenuFooterComponent,
  ]
})
export class AppModule { }
