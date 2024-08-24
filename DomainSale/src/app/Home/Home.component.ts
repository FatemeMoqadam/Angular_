import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './Home.component.html',
  styleUrl: './Home.component.css'
})
export class HomeComponent {
  email = new FormControl();
}