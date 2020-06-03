import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  paginaRecipes = 0;


  constructor(private http: HttpClient) { }

  getRecipesServer(){
    this.paginaRecipes ++;
    return this.http.get(`${URL}/recipes/?pagina=${this.paginaRecipes}`)
  }
}
