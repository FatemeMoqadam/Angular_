import { Component } from '@angular/core';
import { countriesCode, countriesCode_ } from './CountryCode';
import * as fs from 'fs';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './Home.component.html',
  styleUrl: './Home.component.css',
})
export class HomeComponent {
  constructor(private http: HttpClient) {
    // this.GetCountry();
  }

  email = new FormControl<string>(' ');

  p1: string = ' ';
  Gender = true;
  CountryCode = '';
  Country = '';
  CountryImg = '';
  ip = '';
  get p2(): string {
    return this.p1 == 'none' ? 'grid' : 'none';
  }

  Search(): void {
    const name = this.email.value?.split('@')[0];
    this.http
      .get<any>(`https://api.genderize.io/?name=${name}`)
      .subscribe((response) => { this.p1 = 'none';
        if (response.gender == 'female') this.Gender = false;
      });
  }
  GetCountry(): void {
     // this.http.get('https://api.country.is/').subscribe((response: any) => {
    //   this.CountryCode = response.country;
    //   this.Country = countriesCode_[this.CountryCode];
    //   this.CountryImg =
    //     'https://raw.githubusercontent.com/lipis/flag-icons/b919a036693ee1ee0434ef5ae05f93543fc4f437/flags/4x3/' +
    //     this.CountryCode.toLowerCase() +
    //     '.svg';
    //   this.ip=response.ip;
    // });
    this.http
      .get('http://ipv4.icanhazip.com/', { responseType: 'text' })
      .subscribe((response) => {
        this.ip = response.split('\n')[0];
        this.http
          .get(`https://api.country.is/${this.ip}`)
          .subscribe((response: any) => {
            this.CountryCode = response.country;
            this.Country = countriesCode_[this.CountryCode];
            this.CountryImg =
              'https://raw.githubusercontent.com/lipis/flag-icons/b919a036693ee1ee0434ef5ae05f93543fc4f437/flags/4x3/' +
              this.CountryCode.toLowerCase() +
              '.svg';
          });
      });
  }
  
}
