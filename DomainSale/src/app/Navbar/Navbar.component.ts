import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './Navbar.component.html',
  styleUrl: './Navbar.component.css',
})
export class NavbarComponent {
  constructor(private http: HttpClient) {}

  search(): void {
    this.http.get('https://reqres.in/api/users?page=2').subscribe(response=>console.log(response));
  }
  title = 'Domain Sale';

  bool: boolean = false;
  Toggle(): void {
    this.bool = !this.bool;
  }
}
