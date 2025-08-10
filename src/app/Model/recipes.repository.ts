 import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class RecipeRepository {
  private recipes: Recipe[] = [];
  private categories: string[] = [];
  constructor(public dataSource: StaticDataSource) {
    dataSource.getRecipes().subscribe((data) => {
      this.recipes = data;
      this.categories = data
        .map((p) => p.category ?? '(None)')
        .filter((c, index, array) => array.indexOf(c) == index)
        .sort();
    });
  }
  getRecipes(category?: string): Recipe[] {
    if (!category) {
      return this.recipes;
    }
    return this.recipes.filter((p) => p.category === category);
  }

  getProduct(id: number): Recipe | undefined {
    return this.recipes.find((p) => p.id == id);
  }
  getCategories(): string[] {
    return this.categories;
  }
}
