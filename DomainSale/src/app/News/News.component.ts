import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackendService } from '../backend.service';
import { MatIconModule } from '@angular/material/icon';
import { News } from '../Interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [RouterModule,DatePipe,MatIconModule],
  templateUrl: './News.component.html',
  styleUrl: './News.component.css'
})
export class NewsComponent{
  NewS : News[] = [];
  constructor(private backendserver : BackendService) {
    this.backendserver.getNews().subscribe(result => this.NewS=result);
  }

  updateUrl(event : Event,index : number) {
    this.NewS[index].urlToImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEEhfFMCCkrRBjYNaoE-ATATIeQCNThAGgUg&s";
  }
}
