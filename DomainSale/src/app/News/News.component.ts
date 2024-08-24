import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackendService } from '../backend.service';
import { News } from '../Interface';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './News.component.html',
  styleUrl: './News.component.css'
})
export class NewsComponent implements OnInit {
  sta : any;
  NewS : News[] = [];
  constructor(private backendserver : BackendService) {
  }
  imgscr = "https://angular.io/assets/images/logos/angular/angular.png";
  ngOnInit(): void {
    this.backendserver.getNews().subscribe(result => this.NewS=result);
    this.sta=this.backendserver.status;
  }
}
