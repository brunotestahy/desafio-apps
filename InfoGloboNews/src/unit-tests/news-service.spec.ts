import { async } from '@angular/core/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs';
import { NewsService } from "../providers/news-service";

let instance: NewsService;
let mockBackEnd: MockBackend = new MockBackend;
let _http: Http = new Http(mockBackEnd, new BaseRequestOptions);

describe('NewsService', () => {
  beforeEach(async(() => {
    instance = new NewsService(_http);
  }));

  it('should define a NewService instance', () => {
    expect(instance).toBeDefined();
  });

  it('should get the news successfully', () => {
    spyOn(_http, 'get').and.returnValue(Observable.of({ res: 'data' }));
    instance.getNews()
      .subscribe((data) => {
        expect(data).toEqual({ res: 'data' });
      });
  });

});
