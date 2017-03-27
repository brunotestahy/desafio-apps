import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsService } from '../../providers/news-service';
import { NewsDetailPage } from "../news-detail/news-detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  content: any = [];
  isDataReturnedFromService: boolean = true;

  constructor(public navCtrl: NavController,
              public newsService: NewsService) {

  }

  ionViewDidLoad() {
    this.loadNews();
  }

  // Get the news from the service
  public loadNews(): void {
    this.newsService.getNews()
      .subscribe((res) => {
          this.content = [];
          this.addOnlyObjectsWithImage(res.json()[0]['conteudos']);
        },
        (error) => {
          console.error('Error during the news loading service => ', error);
          this.isDataReturnedFromService = false;
        });
  }

  // Getting only news with image and materia kind
  public addOnlyObjectsWithImage(array: Array<any>): void {
    array.forEach((item) => {
      if (typeof(item['imagens'][0]) !== 'undefined' && item['tipo'] === 'materia') {
        this.content.push(item);
      }
    });
  }

  // Navigate to detail Page
  public goToDetailPage(news): void {
    this.navCtrl.push(NewsDetailPage, { newsDetail: news })
      .catch((error) => {
        console.error('Error during navigation => ', error);
      })
  }
}
