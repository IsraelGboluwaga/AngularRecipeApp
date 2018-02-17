import { Component, OnInit } from '@angular/core';
import {RecipeModel} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [
      new RecipeModel('Test Recipe', 'Just a sample', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-04.jpg'),
      new RecipeModel('Test Recipe 2', 'Just a sample', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-05.jpg'),
      new RecipeModel('Test Recipe 3', 'Just a sample', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-06.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
