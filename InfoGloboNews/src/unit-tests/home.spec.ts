import { async, ComponentFixture } from '@angular/core/testing';
import { TestUtils } from '../test';
import { HomePage } from "../pages/home/home";
import { NewsService } from "../providers/news-service";
import { NavController } from "ionic-angular";
import { NavControllerMock } from "../mocks";
import { MockBackend } from "@angular/http/testing";
import { BaseRequestOptions, Http } from "@angular/http";
import { Observable } from "rxjs";
import { NewsDetailPage } from "../pages/news-detail/news-detail";

let fixture: ComponentFixture<HomePage> = null;
let instance: HomePage = null;
let mockBackEnd: MockBackend = new MockBackend;
let _http: Http = new Http(mockBackEnd, new BaseRequestOptions);
let newsService = new NewsService(_http);
let navCtrl = new NavControllerMock();

describe('Home Page', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler(
    [HomePage],
    [
      { provide: NewsService, useValue: newsService },
      { provide: NavController, useValue: navCtrl }
    ])
    .then(compiled => {
      fixture = compiled.fixture;
      instance = compiled.instance;
      fixture.detectChanges();
    }),
  ));

  it('should create the home page', async(() => {
    expect(instance).toBeTruthy();
  }));

  it('should isDataReturnedFromService variable initiate with a true value', async(() => {
    expect(instance.isDataReturnedFromService).toBeTruthy();
  }));

  it('should call loadNews when the View did load', async(() => {
    spyOn(instance, 'loadNews').and.callThrough();
    instance.ionViewDidLoad();
    expect(instance.loadNews).toHaveBeenCalled();
  }));

  it('should call loadNews and return a success callback', async(() => {
    spyOn(_http, 'get').and.returnValue(Observable.of({
      json: () => {
        return ['data'];
      }
    }));
    spyOn(instance, 'addOnlyObjectsWithImage').and.returnValue({});
    instance.loadNews();
    expect(instance.addOnlyObjectsWithImage).toHaveBeenCalled();
  }));

  it('should call loadNews and return a error callback', async(() => {
    spyOn(_http, 'get').and.returnValue(Observable.throw({ error: 'Error' }));
    instance.loadNews();
    expect(instance.isDataReturnedFromService).toBeFalsy();
  }));

  it('should call addOnlyObjectsWithImage and the array with imagens and materia kind', async(() => {
    let array = [
      {
        imagens: [{ url: 'http//' }],
        tipo: 'materia'
      }
    ];
    instance.addOnlyObjectsWithImage(array);
    expect(instance.content).toEqual(array);
  }));

  it('should call addOnlyObjectsWithImage and the array with imagens and no materia kind', async(() => {
    let array = [
      {
        imagens: [{ url: 'http//' }],
        tipo: 'other'
      }
    ];
    instance.addOnlyObjectsWithImage(array);
    expect(instance.content).toEqual([]);
  }));

  it('should call goToDetailPage and navigate to Detail page', async(() => {
    let news = {};
    spyOn(navCtrl, 'push').and.returnValue(Promise.resolve({}));
    instance.goToDetailPage(news);
    expect(navCtrl.push).toHaveBeenCalledWith(NewsDetailPage, { newsDetail: news });
  }));

  it('should call goToDetailPage and navigate fail', async(() => {
    let news = {};
    spyOn(navCtrl, 'push').and.returnValue(Promise.reject({}));
    instance.goToDetailPage(news);
    expect(navCtrl.push).toHaveBeenCalledWith(NewsDetailPage, { newsDetail: news });
  }));

});
