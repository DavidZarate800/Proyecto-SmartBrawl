import { MessageService } from './../services/message.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from '../../../node_modules/sweetalert';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: any;

  constructor(private formBuilder: FormBuilder, public messageService: MessageService) {
    // Form validation
    this.form = formBuilder.group({
      username: ['', Validators.required],
      reason: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      rate: ['', Validators.required],
      agree: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 10000);
    }

    return value;
  }

  submit() {
    if (!this.form.valid){
      swal('Error!', 'Verify required data...', 'error');
    }
    else {
      console.log(this.form.value);
      this.messageService.sendMessage(this.form.value).subscribe(() => {
        swal('Message sent!', 'We will aswer you.', 'success');
      });
    }
  }
}
