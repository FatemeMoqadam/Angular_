import { Component, Input } from '@angular/core';
import * as fs from 'fs';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { ItemComponent } from '../Item/Item.component';
import { Item } from '../Interfaces';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../ItemService';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common';



@Component({
  standalone: true,
  selector: 'app-item-detail',
  templateUrl: './ItemDetail.component.html',
  styleUrls: ['./ItemDetail.component.css'],
  imports: [ReactiveFormsModule, ItemComponent,MatIconModule],
})
export class ItemDetailComponent {
  constructor(    private location: Location,    private route: ActivatedRoute, private itemservice: ItemService) {this.getItem();}
  @Input() itemobj?: Item;
  mss = "";
  item: Item | undefined;
  getItem(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.itemservice.getItem(id)
      .subscribe(item => this.item = item);
  }
  goBack() : void{
    this.location.back();
  }
}
