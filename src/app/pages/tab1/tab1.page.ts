import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(private recipeService: RecipesService) {}

  ngOnInit(){
    this.recipeService.getRecipesServer()
      .subscribe( resp => {
        console.log(resp);
      });
  }

}
