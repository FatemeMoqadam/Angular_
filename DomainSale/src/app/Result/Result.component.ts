import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormControl, FormArray } from '@angular/forms';
import { catchError, tap , of} from 'rxjs';


@Component({
  selector: 'app-result',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './Result.component.html',
  styleUrl: './Result.component.css',
})
export class ResultComponent {

  domain = new FormControl<string>('-');
  punycode = new FormControl<string>('');
  name = new FormControl<string>('');
  extension = new FormControl<string>('');
  name_servers = new FormArray([]);

  Dom: string="";

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    const domain = this.route.snapshot.paramMap.get('domain');
    this.http
      .get<any>(`https://who-dat.as93.net/${domain}`)
      .pipe(
        tap((x) => {
            this.domain.setValue(x.domain.domain);
            this.punycode.setValue(x.domain.punycode);
            this.name.setValue(x.domain.name);
            this.extension.setValue(x.domain.extension);
            this.name_servers = new FormArray(
              x.domain.name_servers.map(
                (service: any) => new FormControl(service)
              )
            );
        }),
        catchError( _ => {this.domain.setValue('/'); return of([]);})
      )
      .subscribe();
    this.Dom =this.route.snapshot.paramMap.get('domain')!;
    }
}
