import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormControl } from '@angular/forms';


@Component({
  selector: 'app-profiler',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './Profile.component.html',
  styleUrl: './Profile.component.css',
})
export class ProfileComponent {
  login:boolean = true ;
  log_sign:boolean = false ;
  email = new FormControl<string>("");
  password = new FormControl<string>("");
  constructor(private http: HttpClient) {
    // if(localStorage.getItem('token')!=null)
    //   this.login=false;
  }

  Submit() : void{
    if(this.log_sign)
      this.http.post("https://reqres.in/api/login",{email:this.email.value , password:this.password.value}).subscribe(response=>console.log(response));
    else
    this.http.post("https://reqres.in/api/register",{email:this.email.value , password:this.password.value}).subscribe(response=>console.log(response));

  }
  
  
}
