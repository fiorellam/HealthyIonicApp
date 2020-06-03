import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipe/recipe.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    RecipesComponent,
    RecipeComponent
  ],
  exports: [
    RecipesComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
