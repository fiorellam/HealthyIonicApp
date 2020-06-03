import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IResponseRecipes } from '../interfaces/IResponseRecipes';

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
}
