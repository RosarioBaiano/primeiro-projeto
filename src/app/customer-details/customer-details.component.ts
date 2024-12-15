import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent {

  customer: any;

  constructor(private route: ActivatedRoute, private customerService: CustomerService) {

  }

  ngOnInit() {
    //pegar o id do url
    let id = this.route.snapshot.paramMap.get('id');

    if(id !== null) {
      this.customer = this.customerService.getbyId(+id);
      //o sinal + junto do id é para converter string em número
    }
  }

}
