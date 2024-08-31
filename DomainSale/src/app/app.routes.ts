import { Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { NewsComponent } from './News/News.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'news', component: NewsComponent }, 
    { path: 'dashboard', component: DashboardComponent }, 
];
