import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipe/recipe.component';
import { IonicModule } from '@ionic/angular';
import { NewcardComponent } from './newcard/newcard.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';



@NgModule({
  entryComponents:[
    RecipeDetailComponent
  ],
  declarations: [
    RecipesComponent,
    RecipeComponent,
    NewcardComponent,
    RecipeDetailComponent
  ],
  exports: [
    RecipesComponent,
    NewcardComponent,
    RecipeDetailComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
