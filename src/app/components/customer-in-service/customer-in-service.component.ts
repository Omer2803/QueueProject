import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer-in-service',
  templateUrl: './customer-in-service.component.html',
  styleUrls: ['./customer-in-service.component.css']
})
export class CustomerInServiceComponent implements OnInit {

  currentCustomer: Customer;

  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    this.customersService.currentUserInServiceAsObservable.subscribe((customer:Customer)=>{
      this.currentCustomer = customer;
    })
  }

  callNext() {
     this.customersService.waitingListAsObservable.subscribe((customers:Customer[])=>{
      var firstCustomerInQueue = customers[0];
      customers = customers.splice(0,1);
      this.customersService.callNext(this.currentCustomer,firstCustomerInQueue);
    })
  
  }

}
