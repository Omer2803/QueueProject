import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  readonly baseUrl: string = 'https://localhost:44341/Customers/';

  constructor(private http: HttpClient) { }

  private waitingList = new BehaviorSubject<Customer[]>(null);
  private currentUserInQueue = new BehaviorSubject<Customer>(null);

  waitingListAsObservable = this.waitingList.asObservable();
  currentUserInServiceAsObservable = this.currentUserInQueue.asObservable();

  insertCustomerToQueue(name: string) {
    let reqHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post(this.baseUrl + 'InsertToQueue', JSON.stringify(name), { headers: reqHeaders }).subscribe((customer: Customer) => {
      this.waitingList.value.push(customer);
    },error=>console.log(error));
  }

  getWaitingList() {
    this.http.get(this.baseUrl + 'GetWaitingList').subscribe((customers: Customer[]) => {
      this.waitingList.next(customers);
    },error=>console.log(error));
  }

  callNext(customerInService:Customer, nextCustomer:Customer) {
    let jObject = {
      customerInService:customerInService,
      nextCustomer:nextCustomer
    };
    let reqHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post(this.baseUrl + 'CallNext', JSON.stringify(jObject), { headers: reqHeaders }).subscribe((customer: Customer) => {
      this.currentUserInQueue.next(customer);
    },error=>console.log(error));
  }

  getCustomerInService(){
    this.http.get(this.baseUrl + 'GetCustomerInService').subscribe((customer: Customer) => {
      this.currentUserInQueue.next(customer);
    },error=>console.log(error));
  }
}
