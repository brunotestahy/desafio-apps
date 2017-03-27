import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { INFOGLOBO_API } from './constants';

@Injectable()
export class NewsService {

  constructor(public http: Http) {
    console.log('Hello NewsService Provider');
  }

  public getNews(): Observable<any> {
    return this.http.get(INFOGLOBO_API.URL);
  }
}
