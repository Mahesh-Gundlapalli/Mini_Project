import { Recipe } from './recipes.model';

export class SavedLine {
  constructor(public recipe: Recipe) {}
}

export class Saved {
  public lines: SavedLine[] = [];

  constructor() {
    // Load saved lines from localStorage on service creation
    const savedData = localStorage.getItem('savedRecipes');
    if (savedData) {
      this.lines = JSON.parse(savedData);
    }
  }

  addLine(recipe: Recipe) {
    // Avoid duplicates
    if (!this.lines.find((line) => line.recipe.id === recipe.id)) {
      this.lines.push(new SavedLine(recipe));
      this.saveToStorage();
    }
  }

  removeLine(id: number) {
    const index = this.lines.findIndex((line) => line.recipe.id === id);
    if (index >= 0) {
      this.lines.splice(index, 1);
      this.saveToStorage();
    }
  }

  private saveToStorage() {
    // Save current saved recipes to localStorage
    localStorage.setItem('savedRecipes', JSON.stringify(this.lines));
  }
}
