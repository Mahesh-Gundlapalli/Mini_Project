
import { Component, OnInit } from '@angular/core';
import { RecipeRepository } from '../Model/recipes.repository';
import { Recipe } from '../Model/recipes.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private repo: RecipeRepository, private router: Router) {}

  ngOnInit() {
    this.recipes = this.repo.getRecipes();
  }

  deleteRecipe(id: number) {
    this.repo.deleteRecipe(id);
    this.recipes = this.repo.getRecipes(); // Refresh list
  }

  editRecipe(id: number) {
    this.router.navigate(['/admin/edit', id]);
  }

  addRecipe() {
    this.router.navigate(['/admin/add']);
  }

  logout() {
    this.router.navigate(['/store']);
  }
}
