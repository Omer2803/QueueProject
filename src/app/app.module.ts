import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InsertCustomerComponent } from './components/insert-customer/insert-customer.component';
import { CustomersWaitingListComponent } from './components/customers-waiting-list/customers-waiting-list.component';
import { CustomerInServiceComponent } from './components/customer-in-service/customer-in-service.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertCustomerComponent,
    CustomersWaitingListComponent,
    CustomerInServiceComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
