import { Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { NewsComponent } from './News/News.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'news', component: NewsComponent }, 
];
