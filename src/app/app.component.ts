import { Component } from '@angular/core';
import { CustomersService } from './services/customers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    this.customersService.getWaitingList();
     this.customersService.getCustomerInService();
  }
}
