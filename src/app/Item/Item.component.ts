import { Component, Input } from '@angular/core';
import * as fs from 'fs';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Item } from '../Interfaces';
import { LowerCasePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ItemService } from '../ItemService';

@Component({
  standalone: true,
  selector: 'app-item',
  templateUrl: './Item.component.html',
  styleUrls: ['./Item.component.css'],
  imports: [ReactiveFormsModule, LowerCasePipe, MatIconModule, RouterModule],
})
export class ItemComponent {
  constructor( private itemservice: ItemService) {this.items = this.itemservice.getItems();}

  @Input() title: string = "Item List";
  items: Item[] = [];
  itemname = new FormControl<string>('');
  q = this.itemname.getRawValue();
  mass: string[] = [];

  // add(): void {
  //   const NewId =
  //     this.customers.length == 0
  //       ? 1
  //       : Math.max(...this.customers.map((c) => c.id)) + 1;
  //   this.customers.push({
  //     id: NewId,
  //     Firstname: this.bioSection.value.firstName,
  //     Lastname: this.bioSection.value.lastName,
  //   } as Customer);
  //   this.mass.push(
  //     `${this.bioSection.value.firstName} ${this.bioSection.value.lastName} has been added with ID : ${NewId}.`
  //   );
  // }
  // delete(customer: Customer): void {
  //   this.customers = this.customers.filter((c) => c != customer);
  //   this.mass.push(
  //     `${customer.Firstname} ${customer.Lastname} has been added with ID : ${customer.id}.`
  //   );
  // }
}
