import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '../Interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './Dashboard.component.html',
  styleUrl: './Dashboard.component.css',
})
export class DashboardComponent {
  constructor(private http: HttpClient) {this.GetAllUsers()}
  Users: User[] = [];

  GetAllUsers(): void {
    let pagenum = 1;
    this.http
      .get<any>(`https://reqres.in/api/users?page=${pagenum}`)
      .subscribe((response) => {
        for (let user of response.data) this.Users.push(user as User);
        while (pagenum < response.total_pages) {
          this.http
            .get<any>(`https://reqres.in/api/users?page=${++pagenum}`)
            .subscribe((response_) => {
              for (let user_ of response_.data) this.Users.push(user_ as User);
            });
        }
      });
  }
  title = 'Domain Sale';

  bool: boolean = false;
  Toggle(): void {
    this.bool = !this.bool;
  }
}
