import { Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { NewsComponent } from './News/News.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { ProfileComponent } from './Profile/Profile.component';
import { ResultComponent } from './Result/Result.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'news', component: NewsComponent }, 
    { path: 'profile', component: ProfileComponent }, 
    { path: 'domain_result/:domain', component: ResultComponent }, 
    { path: 'dashboard', component: DashboardComponent }, 
    { path: '**', component: HomeComponent }, 
];
