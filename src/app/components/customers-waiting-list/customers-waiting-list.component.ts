import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers-waiting-list',
  templateUrl: './customers-waiting-list.component.html',
  styleUrls: ['./customers-waiting-list.component.css']
})
export class CustomersWaitingListComponent implements OnInit {

  waitingList: Customer[] = [];
  
  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    this.customersService.waitingListAsObservable.subscribe((customers:Customer[])=>{
       this.waitingList = customers;
    })
  }

}
