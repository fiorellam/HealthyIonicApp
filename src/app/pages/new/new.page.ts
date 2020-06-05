import { Component, OnInit } from '@angular/core';
import { INew } from 'src/app/interfaces/INew';
import { NewsService } from 'src/app/services/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  new: INew = {};
  newId;

  constructor(private route: ActivatedRoute, private newsService: NewsService) { 
    this.newId = this.route.snapshot.paramMap.get('newId');
  }

  ngOnInit() {
    this.new = this.newsService.getNew(this.newId);
    console.log(this.new);
  }

}
