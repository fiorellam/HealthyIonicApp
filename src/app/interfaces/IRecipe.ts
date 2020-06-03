import { IUsuario } from './IUsuario';

export interface IRecipe {
    ingredients?: any[];
    _id?: string;
    title?: string;
    image?: string;
    usuario?: IUsuario;
}