import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-insert-customer',
  templateUrl: './insert-customer.component.html',
  styleUrls: ['./insert-customer.component.css']
})
export class InsertCustomerComponent implements OnInit {

  name:string;
  customerForm: FormGroup;
  submitted:Boolean;
  constructor(private formBuilder: FormBuilder, private customersService: CustomersService) { }

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      name: ["", Validators.required]
    })
  }

  insertToQueue() {
    this.submitted = true;
    if (this.customerForm.invalid) {
      return;
    }
    this.customersService.insertCustomerToQueue(this.customerForm.controls.name.value);
    this.customerForm.reset();
    this.submitted = false;

  }

}
