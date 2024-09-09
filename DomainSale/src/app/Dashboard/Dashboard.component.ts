import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Resource, User } from '../Interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule,],
  templateUrl: './Dashboard.component.html',
  styleUrl: './Dashboard.component.css',
})
export class DashboardComponent {
  constructor(private http: HttpClient) {this.GetAllUsers(); this.GetAllResources()}
  Users: User[] = [];
  Resources: Resource[] = [];

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

  GetAllResources(): void {
    let pagenum = 1;
    this.http
      .get<any>(`https://reqres.in/api/Unknown?page=${pagenum}`)
      .subscribe((response) => {
        for (let resource of response.data) this.Resources.push(resource as Resource);
        while (pagenum < response.total_pages) {
          this.http
            .get<any>(`https://reqres.in/api/Unknown?page=${++pagenum}`)
            .subscribe((response_) => {
              for (let resource_ of response_.data) this.Resources.push(resource_ as Resource);
            });
        }
      });
  }
  index: number = 1;
  Toggle(num : number): void {
    this.index = num;
  }
}
