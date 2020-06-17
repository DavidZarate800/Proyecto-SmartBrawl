import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from '../../../node_modules/sweetalert';

@Component({
  selector: 'app-modal-log-in',
  templateUrl: './modal-log-in.component.html',
  styleUrls: ['./modal-log-in.component.css']
})
export class ModalLogInComponent implements OnInit {
  form: any;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  submit() {
    if (!this.form.valid) {
      swal('Error!', 'Verify your data...', 'error');
    }
    else if (true && true) { // En este if va la verificación con la base de datos && el máximo de intentos sea menor o igual a 3
      console.log(this.form.value.email);
      console.log(this.form.value.password);
      swal('Successful log in!', 'Welcome to Smart Brawl!', 'success');
    }
    else { // Si es que no coincide con la base de datos
      swal('Error!', 'Verify your data...', 'error');
    }
  }
}
