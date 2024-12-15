import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  date: Date = new Date();

  nameText: string = '';

  changeName(name: string) {
    this.nameText = name;
  }

  value: number = 45.58;
  pi: number = 3.1415926539;

}
