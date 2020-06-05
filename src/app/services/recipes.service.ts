import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IResponseRecipes } from '../interfaces/IResponseRecipes';
import { map } from 'rxjs/operators';

const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  paginaRecipes = 0;


  constructor(private http: HttpClient) { }

  getRecipesServer(){
    this.paginaRecipes ++;
    return this.http.get<IResponseRecipes>(`${URL}/recipes/?pagina=${this.paginaRecipes}`)
  }

  getQuery(query:string){
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${query}`
    const headers = new HttpHeaders({
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	    "x-rapidapi-key": "87cca58015mshe835e7264fd3118p1b712cjsn7c517543a14f",
    });
    return this.http.get(url, {headers});
  }

  getRecipesFoodNutrition(){
    const getRecipesRandom = 'random';
    return this.getQuery(getRecipesRandom).pipe(
      map((resp:any[])=>
        resp.map(recipe => {
            console.log(recipe);
        }))
    )
    
  }
}
