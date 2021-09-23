import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  })
  export class AppComponent {
  nome: any;
  esconderCaixa = true;
  alterarNome(nome: { target: { value: any; }; }) {
  console.log(nome.target.value);
  this.nome = nome.target.value;
  }
  adicionar(nomeInput: any) {
    this.nome = nomeInput.value;
    this.esconderCaixa = nomeInput.value.length<=0;
  }
  numero: number | undefined;
escolher (){
this.numero = Math.floor(Math.random() * 100) + 1;
}
  
  }
  
