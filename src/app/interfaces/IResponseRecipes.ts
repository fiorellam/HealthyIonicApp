import { IRecipe } from './IRecipe';

export interface IResponseRecipes {
    ok: boolean;
    pagina: number;
    recipes: IRecipe[];
}
  