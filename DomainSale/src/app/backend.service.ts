import { News } from './Interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, catchError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BackendService {
  constructor(private http: HttpClient) {}

  NEWS: News[] = [];

  getNews(): Observable<News[]> {
    this.http
      .get<any>(
        'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json'
      )
      .subscribe((response) => {
        if (response.status == 'ok')
          for (let a of response.articles) {
            // this.http.get(a.urlToImage).pipe(
            //   catchError((_) => {
            //     a.urlToImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEEhfFMCCkrRBjYNaoE-ATATIeQCNThAGgUg&s";
            //     return of([]);
            //   })
            // );
            this.NEWS.push(a as News);
          }
      });
    return of(this.NEWS);
  }
}
