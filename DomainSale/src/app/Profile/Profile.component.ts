import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-profiler',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './Profile.component.html',
  styleUrl: './Profile.component.css',
})
export class ProfileComponent {
  login: boolean = true;
  log_sign: boolean = true;
  email = new FormControl<string>('');
  password = new FormControl<string>('');
  message = new FormControl<string>('');
  status: string = 'none';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  Toggle(bool: boolean): void {
    this.log_sign = bool;
    this.status = 'none';
  }
  Submit(): void {
    if (this.log_sign)
      this.http
        .post<any>('https://reqres.in/api/login', {
          email: this.email.value,
          password: this.password.value,
        })
        .pipe(
          catchError((error) => {
            this.message.setValue(error.error.error);
            this.status = 'grid';
            return of([]);
          })
        )
        .subscribe((response) => {
          localStorage.setItem('token', response.token);
          if (this.status == 'none') this.router.navigate([`/`]);
        });
    else
      this.http
        .post<any>('https://reqres.in/api/register', {
          email: this.email.value,
          password: this.password.value,
        })
        .pipe(
          catchError((error) => {
            this.status = 'grid';
            this.message.setValue(error.error.error);
            return of([]);
          })
        )
        .subscribe((response) => { 
          localStorage.setItem('id', response.id);
          localStorage.setItem('token', response.token);
          if (this.status == 'none') this.router.navigate([`/`]);
        });
    this.http.get<any>(
      `https://reqres.in/api/users/${localStorage.getItem('id')}`,
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    );
  }
}
