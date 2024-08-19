import { Injectable } from '@angular/core';
import { Item , ITEMS} from './Interfaces';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ItemService {

  constructor() { }

  getItems(): Item[] {
    return ITEMS;
  }

  getItem(id : number) : Observable<Item>{
    return of(ITEMS.filter(item => item.id == id)[0]);
  }

}