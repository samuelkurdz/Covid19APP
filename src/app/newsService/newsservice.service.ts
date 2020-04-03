import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

 API_KEy = '244b0138113540fe9c325c215323e51c';
 url = `https://newsapi.org/v2/top-headlines?country=ng&q=coronavirus&apikey=${this.API_KEy}`;

 constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get<any>(this.url)
  }
}
