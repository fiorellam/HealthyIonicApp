import { Component, OnInit, Input } from '@angular/core';
import { IRecipe } from 'src/app/interfaces/IRecipe';
import { ModalController } from '@ionic/angular';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {

  @Input() recipes: IRecipe[] = [];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.recipes);
  }

  async recipeDetail(id){
    console.log(id);
    const modal = await this.modalCtrl.create({
      component: RecipeDetailComponent,
      componentProps: {
        id
      }
    });
    modal.present();
  }

}
