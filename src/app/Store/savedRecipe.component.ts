import { Saved } from './../Model/saved.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'saved-recipe',
  templateUrl: 'savedRecipe.component.html',
})
export class SavedRecipeComponent {
  constructor(public saved: Saved, private router: Router) {}
  goHome() {
    this.router.navigate(['/Store']);
  }
}
