import { Routes } from '@angular/router';
import {CustomerComponent} from './Customer/Customer.component';
import {NotFoundComponent} from './NotFound/NotFound.component';
import {ItemComponent} from './Item/Item.component';
import {ItemDetailComponent} from './ItemDetail/ItemDetail.component';


export const routes: Routes = [
    { path: 'customer', component: CustomerComponent }, 
    { path: 'item', component: ItemComponent }, 
    { path: 'item-detail/:id', component: ItemDetailComponent }, 
    { path: '**', component: NotFoundComponent },  // Wildcard route for a 404 page
];
