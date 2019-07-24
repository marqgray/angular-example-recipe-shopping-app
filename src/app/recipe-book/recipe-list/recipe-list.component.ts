import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModel[] = [
    new RecipeModel('A Test Recipe', 'This is simply a test',
      'https://cdn.pixabay.com/photo/2017/09/17/23/21/gastronomy-2760200_960_720.jpg')
  ];
  @Output() recipeSelected = new EventEmitter<RecipeModel>();

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: RecipeModel) {
    this.recipeSelected.emit(recipe);
  }
}
