import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NewsPage } from '../news/news';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  news;

  constructor(public navCtrl: NavController) {
    this.news = NewsPage;
  }

}
