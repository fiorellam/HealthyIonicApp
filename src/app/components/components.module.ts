import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipe/recipe.component';
import { IonicModule } from '@ionic/angular';
import { NewcardComponent } from './newcard/newcard.component';



@NgModule({
  declarations: [
    RecipesComponent,
    RecipeComponent,
    NewcardComponent
  ],
  exports: [
    RecipesComponent,
    NewcardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
