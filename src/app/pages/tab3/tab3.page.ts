import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { IRecipe } from 'src/app/interfaces/IRecipe';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  recipesSaved: IRecipe[] = [];

  constructor(private recipeService: RecipesService) {}

  ngOnInit(){
    this.recipeService.getRecipesServer()
      .subscribe( resp => {
        console.log(resp);
        this.recipesSaved.push(...resp.recipes);
      });
  }

}
