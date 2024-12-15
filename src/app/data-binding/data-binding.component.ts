import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  message = 'Meu primeiro data Binding !';

  imagePath = 'assets/OIP.jpg';

  isDisabled = true;

  areaLabel = 'fechar';

  nomeCliente = '';

  botaoFechar = `
  border: 1px solid;
  border-radius: 45px;
  padding: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

 estilizarTitulo= true;

 
//botaoClass = 'botao verde';
//ou
//botaoClass = ['botao', 'verde'];
//ou
botaoClass = {botao: true, verde: true};

  enableCloseButton() {
    this.isDisabled = !this.isDisabled;
  }

  aplicarEstiloTitulo() {
    this.estilizarTitulo = !this.estilizarTitulo;

    this.botaoClass = {

      botao: true,
      verde: !this.botaoClass.verde //isso só funcona pq declarei o botao da segunda maneira,da primeira n funcionaria
  
    }

  }

}
