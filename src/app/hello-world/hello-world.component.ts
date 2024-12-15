import { Component } from '@angular/core';
import { FilhoAComponent } from "../filho-a/filho-a.component";
import { FilhoBComponent } from "../filho-b/filho-b.component";
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [FilhoAComponent, FilhoBComponent, RouterModule,RouterOutlet, CommonModule],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent {

  textoVaiProfilho: string = '';

  textoVeioDofilho: string = '';

}
