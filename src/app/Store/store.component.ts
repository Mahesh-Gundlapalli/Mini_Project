import { Router } from '@angular/router';
import { Recipe } from '../Model/recipes.model';
import { Saved } from '../Model/saved.model';
import { RecipeRepository } from './../Model/recipes.repository';
import { Component } from '@angular/core';
@Component({
  selector: 'store',
  templateUrl: 'store.component.html',
})
export class StoreComponent {
  public selectedCategory: string | undefined = undefined;

  constructor(
    private repository: RecipeRepository,
    private saved: Saved,
    private router: Router
  ) {}

  get recipes() {
    return this.repository.getRecipes(this.selectedCategory);
  }
  get categories() {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }
  addToSave(recipe: Recipe) {
    this.saved.addLine(recipe);
    this.router.navigateByUrl('/saved');
  }
  goToAdmin() {
  this.router.navigate(['/admin']);
  }

}
