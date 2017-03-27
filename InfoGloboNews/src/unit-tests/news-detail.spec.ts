import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  App, Config, DomController, Events, GestureController, IonicModule, Keyboard, NavController,
  NavParams, Platform
} from "ionic-angular";
import { NavControllerMock, NavParamsMock, PlatformMock } from "../mocks";
import { NewsDetailPage } from "../pages/news-detail/news-detail";

let fixture: ComponentFixture<NewsDetailPage> = null;
let instance: NewsDetailPage = null;

describe('News Detail Page', () => {

  beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [IonicModule],
        providers: [
          GestureController, Config, DomController, App, Keyboard, Events,
          { provide: NavController, useClass: NavControllerMock },
          { provide: NavParams, useClass: NavParamsMock },
          { provide: Platform, useClass: PlatformMock }
        ],
        declarations: [NewsDetailPage],
      }).compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(NewsDetailPage);
          instance = fixture.debugElement.componentInstance;
          spyOn(instance, 'loadNewsDetail').and.callThrough();
        });
    }
  ));

  it('should create the news detail page', async(() => {
    expect(instance).toBeTruthy();
  }));

  it('should call loadNewsDetail method and get params correctly', async(() => {
    NavParamsMock.setParams('newsDetail', { content: 'data' });
    instance.loadNewsDetail();
    expect(instance.news).toEqual({ content: 'data' });
  }));

});
