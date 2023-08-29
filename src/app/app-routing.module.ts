import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'cadastrar-produto', loadChildren: () => import('./cadastrar-produto/cadastrar-produto.module').then(m => m.CadastrarProdutoPageModule) },
  { path: 'lista-produtos', loadChildren: () => import('./lista-produtos/lista-produtos.module').then(m => m.ListaProdutosPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
