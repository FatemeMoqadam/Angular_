import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './Navbar.component.html',
  styleUrl: './Navbar.component.css'
})
export class NavbarComponent {
  constructor(private http : HttpClient){}

  search(input : string) : void{
    this.http.get('https://api.genderize.io/?name=negin')
  }
  title = 'Domain Sale';

  // get color() : string{
  //   return this.bool ? 'blue' : 'green';
  // }
  bool : boolean = false;

  Toggle() : void {this.bool = !this.bool}
}
