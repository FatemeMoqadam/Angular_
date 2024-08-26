import { News, Config } from './Interface';
import { Injectable, Type } from '@angular/core';
import { writeFileSync } from 'fs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of ,tap} from 'rxjs';
const NEWS = [];

@Injectable({ providedIn: 'root' })
export class BackendService {
  constructor(private http: HttpClient) {}
  status: any = '222';

  NEWS: News[] = [];
  temp :any[] = [];

  getNews(): Observable<News[]> {
    this.http.get<any>("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json").subscribe();
    // writeFileSync("Customer.txt",this.NEWS.map(e=>
    //   `${e.title}`
    // ).join('\n'), {
    //   flag: "w"
    //  });
    
    return of(this.NEWS);
  }
}
