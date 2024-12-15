import { Component } from '@angular/core';
import { RouterModule, RouterOutlet,} from '@angular/router';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private authService: AuthService) {

  }

  podeAcessar: boolean = false;

  ngOnInit() {

    this.podeAcessar = this.authService.podeAcessar();
  }

  alterarAcesso(e: any) {
    this.authService.update(e.target.checked);
  }

}
