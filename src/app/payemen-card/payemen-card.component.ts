import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-payemen-card',
  templateUrl: './payemen-card.component.html',
  styleUrls: ['./payemen-card.component.css']
})
export class PayemenCardComponent implements OnInit {

  constructor() { }

  cardForm = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
    cardNumber: new FormControl('',[
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    expiration: new DateFormControl('',[
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/)
    ]),
    securityCode: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
  })

  ngOnInit(): void {
  }

  onSubmit(){

  }

  onReset(){
    this.cardForm.reset()
  }
}
