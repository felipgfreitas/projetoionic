import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CadastrarProdutoPageRoutingModule } from './cadastrar-produto-routing.module';
import { CadastrarProdutoPage } from './cadastrar-produto.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarProdutoPageRoutingModule,
    HttpClientModule, 
  ],
  declarations: [CadastrarProdutoPage]
})
export class CadastrarProdutoPageModule {}
