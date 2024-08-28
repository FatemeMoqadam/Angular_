import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './Home.component.html',
  styleUrl: './Home.component.css',
})
export class HomeComponent {
  constructor(private http: HttpClient) {}

  email = new FormControl<string>(" ");
  p1 = 'display';
  Gender = true;
  get p2(): string {
    return this.p1 == 'none' ? 'grid' : 'none';
  }
  Search(): void {
    const name = this.email.value?.split('@')[0];
    this.http
      .get<any>(`https://api.genderize.io/?name=${name}`)
      .subscribe((response) => {
        if (response.gender == 'female') this.Gender = false;
      });
    this.p1 = 'none';
  }
  GetCountry() : void{
    this.http.get('http://ipv4.icanhazip.com/').subscribe(response => console.log(response));
    //https://ip-api.com/#178.252.138.66

  }
}
