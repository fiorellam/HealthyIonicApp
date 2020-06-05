import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { IRecipe } from 'src/app/interfaces/IRecipe';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUsuario } from 'src/app/interfaces/IUsuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UIServiceService } from 'src/app/services/uiservice.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  recipesSaved: IRecipe[] = [];
  

  constructor(private recipeService: RecipesService,
              private formBuilder: FormBuilder,
              private usuarioService: UsuarioService,
              private uiService: UIServiceService,
              private navCtrl: NavController) {
                
  }

  ngOnInit(){
    
  }

  goToEditProfile(){
    this.navCtrl.navigateRoot('profile')
  }

  goToMyRecipes(){
    this.navCtrl.navigateRoot('myrecipes')
  }

  logout(){
    this.usuarioService.logout();
  }

}
