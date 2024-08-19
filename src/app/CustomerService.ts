import { Injectable } from '@angular/core';
import { Customer , CUSTOMERS } from './Interfaces';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  constructor() { }

  getCustomers(): Customer[] {
    return CUSTOMERS;
  }
}