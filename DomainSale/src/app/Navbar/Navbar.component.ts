import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './Navbar.component.html',
  styleUrl: './Navbar.component.css',
})
export class NavbarComponent {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.domain.valueChanges.subscribe(change => {
      this.resultURL = "domain_result/"+this.domain.value;
    });
  }
  domain = new FormControl<string>('');
  resultURL = "";
  title = 'Domain Sale';
}
