import { Component } from '@angular/core';
import * as fs from 'fs';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { ItemComponent } from '../Item/Item.component';
import { Customer } from '../Interfaces';
import { CustomerService } from '../CustomerService';

@Component({
  standalone: true,
  selector: 'app-customer',
  templateUrl: './Customer.component.html',
  styleUrls: ['./Customer.component.css'],
  imports: [ReactiveFormsModule , ItemComponent],
})
export class CustomerComponent {
  constructor(private customerservice: CustomerService) {this.customers=this.customerservice.getCustomers();}
  title = "Item List fromcustomer";
  customers: Customer[] = [];
  bioSection = new FormGroup({
    firstName: new FormControl<string|null>(null),
    lastName: new FormControl<string|null>(null),
  });
  mass: string[] = [];

  add(): void {
    if(this.bioSection.value.firstName  == null|| this.bioSection.value.lastName == null)
      return ;
    const NewId =
      this.customers.length == 0
        ? 1
        : Math.max(...this.customers.map((c) => c.id)) + 1;
    this.customers.push({
      id: NewId,
      Firstname: this.bioSection.value.firstName,
      Lastname: this.bioSection.value.lastName,
    } as Customer);
    this.mass.push(
      `${this.bioSection.value.firstName} ${this.bioSection.value.lastName} has been added with ID : ${NewId}.`
    );
    this.bioSection.reset();
  }
  delete(customer: Customer): void {
    this.customers = this.customers.filter((c) => c != customer);
    this.mass.push(
      `${customer.Firstname} ${customer.Lastname} has been added with ID : ${customer.id}.`
    );
  }
}
