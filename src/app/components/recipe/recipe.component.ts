import { Component, OnInit, Input } from '@angular/core';
import { IRecipe } from 'src/app/interfaces/IRecipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {

  @Input() recipe: IRecipe = {};

  constructor() { }

  ngOnInit() {}
  

}
