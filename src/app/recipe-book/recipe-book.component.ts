import {Component, OnInit} from '@angular/core';
import {RecipeModel} from './recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {

  selectedRecipe: RecipeModel;

  constructor() {
  }

  ngOnInit() {
  }

}
