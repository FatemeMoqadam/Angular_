import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackendService } from '../backend.service';
import { News } from '../Interface';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './NewsDetail.component.html',
  styleUrl: './NewsDetail.component.css'
})
export class NewsDetailComponent  {

  constructor(private backendserver : BackendService) {}
  
}
