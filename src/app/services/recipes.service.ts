import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IResponseRecipes } from '../interfaces/IResponseRecipes';
import { map } from 'rxjs/operators';
import { IRecipe } from '../interfaces/IRecipe';
import { IUsuario } from '../interfaces/IUsuario';
import { UsuarioService } from './usuario.service';

const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  user: IUsuario;


  constructor(private http: HttpClient,
              private usuarioService: UsuarioService) { }

  getRecipesServer(){
    this.user = this.usuarioService.obtenerUsuario();
    console.log(this.user)
    return this.http.get<IResponseRecipes>(`${URL}/recipes/?uid=${this.user._id}`)
  }

  getQuery(query:string){
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${query}`
    let params = new HttpParams();
    params = params.append('number', '10');
    const headers = new HttpHeaders({
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	    "x-rapidapi-key": "87cca58015mshe835e7264fd3118p1b712cjsn7c517543a14f",
    });
    return this.http.get(url, {headers, params});
  }

  getRecipesFoodNutrition(){
    const getRecipesRandom = 'random';
    return this.getQuery(getRecipesRandom)
      .pipe( map ((recipes) => recipes['recipes']))
      .pipe(
        map((resp: any[]) =>
          resp.map(recipe => ({ 
            vegetarian: recipe.vegetarian, 
            extendedIngredients: recipe.extendedIngredients,
            id: recipe.id,
            title: recipe.title,
            readyInMinutes: recipe.readyInMinutes,
            image: recipe.image,
            instructions: recipe.instructions
          }))
        )
      );
  }

  getSpecificRecipe(idx){
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${idx}/information`
    const headers = new HttpHeaders({
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	    "x-rapidapi-key": "87cca58015mshe835e7264fd3118p1b712cjsn7c517543a14f",
    });
    return this.http.get<IRecipe>(url, {headers});
      
  }

  saveRecipe(recipe: IRecipe){
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    this.http.post(`${URL}/recipes`, recipe, {headers}).
      subscribe( resp => {
        console.log(resp);
      });
  }
}
