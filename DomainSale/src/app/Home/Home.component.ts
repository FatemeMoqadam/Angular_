import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './Home.component.html',
  styleUrl: './Home.component.css',
})
export class HomeComponent {
  constructor(private http: HttpClient) {}

  email = new FormControl();
  p1="display";
  Gender=true;
  get p2() : string{
    return this.p1=='none' ? 'grid': 'none';  }
  Search():void{
    this.http.get<any>(`https://api.genderize.io/?name=${this.email.value}`).subscribe(response => {if(response.gender=='female') this.Gender=false;});
    this.p1 = "none";
  }
 }
