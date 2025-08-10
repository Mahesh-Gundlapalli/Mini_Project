import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeRepository } from '../Model/recipes.repository';
import { Recipe } from '../Model/recipes.model';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html'
})
export class EditRecipeComponent implements OnInit {
  recipe: Recipe = new Recipe();

  constructor(
    private route: ActivatedRoute,
    private repo: RecipeRepository,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const found = this.repo.getProduct(id);
    if (found) {
      this.recipe = { ...found };
    }
  }

  save() {
    this.repo.updateRecipe(this.recipe);
    this.router.navigate(['/admin']);
  }
}
