import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.page.html',
  styleUrls: ['./lista-produtos.page.scss'],
})
export class ListaProdutosPage {
  produtos: any[] = [];

  constructor(private http: HttpClient) {}

  ionViewWillEnter() {
    this.http.get('http://localhost:3000/produtos')
      .subscribe((data: any) => {
        this.produtos = data;
      });
  }

  excluirProduto(id: number) {
    this.http.delete(`http://localhost:3000/produtos/${id}`)
      .subscribe(() => {
        this.ionViewWillEnter();
      });
  }
}
