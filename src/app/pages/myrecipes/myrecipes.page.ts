import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/interfaces/IRecipe';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-myrecipes',
  templateUrl: './myrecipes.page.html',
  styleUrls: ['./myrecipes.page.scss'],
})
export class MyrecipesPage implements OnInit {

  recipesSaved: IRecipe[] = [];
  cargando = true;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.cargando = true;
    this.recipesService.getRecipesServer().subscribe(
      resp => {
        console.log(resp)
        this.recipesSaved.push(...resp.recipes)
        this.cargando = false;
      }

    );
  }
  

}
