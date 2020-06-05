import { IUsuario } from './IUsuario';

export interface IRecipe {
    // ingredients?: any[];
    _id?: string;
    vegetarian?: boolean;
    extendedIngredients?: any[];
    id?: string;
    title?: string;
    readyInMinutes?: string;
    image?: string;
    summary?:string;
    instructions?: string;

    usuario?: IUsuario;
}