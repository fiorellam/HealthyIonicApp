import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { IRecipe } from 'src/app/interfaces/IRecipe';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  recipesSaved: IRecipe[] = [];

  constructor(private recipeService: RecipesService) {}

  ngOnInit(){
    
  }

}
