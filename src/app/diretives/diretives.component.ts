import { CommonModule, FormStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diretives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './diretives.component.html',
  styleUrl: './diretives.component.css'
})
export class DiretivesComponent {

  classeBotaoVermelho = 'botao vermelho';

  classeBotaoVerde = 'botao verde';

  aplicarEstiloVerde = true;

 estilosParagrafo = {'font-sinze': '14px', 'font-style': 'italic'}

 name = '';

 camposVisiveis = true;

 clientes = [

  {nome: "Baiano"},
  {nome: "Antonio"},
  {nome: "Jorge"},
  {nome: "Romario"},
 ]
 

 aplicarEstilos() {
  this.aplicarEstiloVerde = !this.aplicarEstiloVerde;

}

alterarParaMaiscula($event: string) {

  this.name = $event.toUpperCase();
}

  esconderCampos() {
    this.camposVisiveis = !this.camposVisiveis;
  }


}


