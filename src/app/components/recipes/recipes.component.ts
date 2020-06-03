import { Component, OnInit, Input } from '@angular/core';
import { IRecipe } from 'src/app/interfaces/IRecipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {

  @Input() recipes: IRecipe[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.recipes);
  }

}
