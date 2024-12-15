import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

 private customers=  [
    {id: 1, nome: 'Baiano'},
    {id: 2, nome: 'Edson'},
    {id: 3, nome: 'Alexandre'}
  ];


  getCustomers() {
    return this.customers
  }

  getbyId(id: number) {
    let customer = this.customers.find(c=> {
      return c.id === id;
    })

    return customer;
  }
}
