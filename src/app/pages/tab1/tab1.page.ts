import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { IRecipe } from 'src/app/interfaces/IRecipe';
import { INew } from 'src/app/interfaces/INew';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  recipesSaved: IRecipe[] = [];
  news: INew[] = [];

  constructor(private recipeService: RecipesService) {}

  ngOnInit(){
    
  }

}
