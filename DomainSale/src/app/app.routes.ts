import { Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { NewsComponent } from './News/News.component';
import { NewsDetailComponent } from './News_Detail/NewsDetail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'news', component: NewsComponent }, 
    { path: 'news/:id', component: NewsDetailComponent },
];
