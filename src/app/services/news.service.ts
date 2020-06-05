import { Injectable } from '@angular/core';
import { INew } from '../interfaces/INew';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newList: INew[];

  constructor(private http: HttpClient) { 
    // this.asignNewsListValues();
  }

  getQuery(query: string) {
    const url = `https://vegan-news.p.rapidapi.com/${query}`;
    const headers = new HttpHeaders({
      "x-rapidapi-host": "vegan-news.p.rapidapi.com",
      "x-rapidapi-key": "87cca58015mshe835e7264fd3118p1b712cjsn7c517543a14f"
    });
    return this.http.get(url, { headers });
  }

  getNews(){
    const getNewsQuery = 'getnews';
    return this.getQuery(getNewsQuery)
    .pipe(map((news: Response) => news['articles']));
  }

  getNew(idx){
    return this.newList[idx];
  }

  asignNewsListValues(){
    this.getNews().subscribe(
      news => {
        console.log(news)
        this.newList = news;
        // console.log('hola')
      }
    )
  }
}
