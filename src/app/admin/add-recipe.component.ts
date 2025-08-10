
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeRepository } from '../Model/recipes.repository';
import { Recipe } from '../Model/recipes.model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html'
})
export class AddRecipeComponent {
  recipe: Recipe = new Recipe();

  constructor(private repo: RecipeRepository, private router: Router) {}

  save() {
    this.recipe.id = this.repo.getNextId();
    this.repo.addRecipe(this.recipe);
    this.router.navigate(['/admin']);
  }
}
