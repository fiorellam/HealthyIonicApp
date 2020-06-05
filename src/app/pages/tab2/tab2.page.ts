import { Component } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { IRecipe } from 'src/app/interfaces/IRecipe';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  recipes: IRecipe[] = [];
  cargando = true;

  constructor(private recipesService: RecipesService) {
    this.cargando = true;
    // this.recipesService.getRecipesFoodNutrition().subscribe(
    //   resp => {
    //     this.recipes.push(...resp);
    //     console.log('this recipes', this.recipes);
    //     console.log(resp);
    //     this.cargando = false;
    //   }
    // );
  }

}
