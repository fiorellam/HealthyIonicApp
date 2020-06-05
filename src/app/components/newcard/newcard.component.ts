import { Component, OnInit } from '@angular/core';
import { INew } from 'src/app/interfaces/INew';
import { NewsService } from 'src/app/services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newcard',
  templateUrl: './newcard.component.html',
  styleUrls: ['./newcard.component.scss'],
})
export class NewcardComponent implements OnInit {
  
  newsList: INew[];

  constructor(public newsService: NewsService, 
              private router: Router) { 
                // this.getNews();
              }

  ngOnInit() {}

  getNews(){
    // this.newsService.getNews().subscribe(
    //   news => {
    //     this.newsList = news;
    //   }
    // )
  }

  goToSpecificNew(idx:string){
    this.router.navigate(['main/tabs/tab1/new', idx]);
  }


}
