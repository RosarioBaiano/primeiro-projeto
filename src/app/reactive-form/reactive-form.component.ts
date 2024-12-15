import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  
  //Utilizando FormGroup e FormControl para fazer o Formulário
  // profileForm = new FormGroup({
  //    name: new FormControl(''),
  //    cpf: new FormControl(''),
  //    address: new FormGroup(
  //     {
  //       street: new FormControl(''),
  //       city: new FormControl(''),
  //       state: new FormControl(''),
  //       zip: new FormControl('')
  //     }
  //   )
  // });

  //Outro jeito de criar formulários injectando o FormBuilder
  formBuilder = inject(FormBuilder); 

  profileForm = this.formBuilder.group({
    name: ['', Validators.required],
    cpf: ['', Validators.required],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    //Assim cria automaticamente caixas de texto para apelidos do usuário
    nicknames: this.formBuilder.array([this.formBuilder.control('')])
  });
   //Assim cria automaticamente caixas de texto para apelidos do usuário
  get apelidos() {
    return this.profileForm.get('nicknames') as FormArray
  }
 
  preencherFormulario() {
    this.profileForm.patchValue({
      name: 'Baiano',
      cpf: '1234567',
      address: {
        street: 'R do encontro 9',
        city: 'Guarda',
        state: 'Guarda',
        zip: '6875-000',
      }
    });
  }
   //esse método pega os apelidos adicionados e retorna no get apelidos
  adicionarApelido() {
    this.apelidos.push(this.formBuilder.control(''))
  }

  submitForm() {
    console.warn(this.profileForm.value);   
  }
}
