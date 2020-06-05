import { Component, OnInit, Input } from '@angular/core';
import { IRecipe } from 'src/app/interfaces/IRecipe';
import { RecipesService } from 'src/app/services/recipes.service';
import { ModalController } from '@ionic/angular';
import { UIServiceService } from 'src/app/services/uiservice.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {

  @Input() id;
  recipeDetail: IRecipe;
  cargando = true;

  constructor(private recipesService: RecipesService,
              private modalCtrl: ModalController,
              private uiService: UIServiceService) { }

  ngOnInit() {
    this.cargando=true;
    this.recipesService.getSpecificRecipe(this.id).subscribe(
      resp => {
        console.log('information', resp)
        this.recipeDetail = resp;
        this.cargando = false
      }
    );
  }

  goBack(){
    this.modalCtrl.dismiss();
  }

  saveRecipe(recipeDetail){
    console.log(recipeDetail);

    this.recipesService.saveRecipe(recipeDetail);
    this.uiService.presentToast('Recipe has been saved');

  }


}
