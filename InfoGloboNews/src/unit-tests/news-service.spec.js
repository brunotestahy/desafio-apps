"use strict";
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/http");
var testing_2 = require("@angular/http/testing");
var rxjs_1 = require("rxjs");
var news_service_1 = require("../providers/news-service");
var instance;
var mockBackEnd = new testing_2.MockBackend;
var _http = new http_1.Http(mockBackEnd, new http_1.BaseRequestOptions);
describe('NewsService', function () {
    beforeEach(testing_1.async(function () {
        instance = new news_service_1.NewsService(_http);
    }));
    it('should get the news successfully', function () {
        spyOn(_http, 'get').and.returnValue(rxjs_1.Observable.of({ res: 'data' }));
        instance.getNews()
            .subscribe(function (data) {
            expect(data).toEqual({ res: 'data' });
        });
    });
});
