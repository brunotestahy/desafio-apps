import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html'
})
export class NewsDetailPage {

  news: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.loadNewsDetail();
  }

  // Get the news item by nav params
  public loadNewsDetail(): void {
    this.news = this.navParams.get('newsDetail');
  }

}
