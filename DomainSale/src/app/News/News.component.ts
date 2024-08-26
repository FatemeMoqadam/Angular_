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
export class NewsComponent implements OnInit {
  NewS : News[] = [];
  constructor(private backendserver : BackendService) {
  }
  ngOnInit(): void {
    this.backendserver.getNews().subscribe(result => this.NewS=result);
  }

  updateUrl(index : number) {
    this.NewS[index].urlToImage = "https://wallpapers.com/images/featured/blank-white-7sn5o1woonmklx1h.jpg";
  }
}
