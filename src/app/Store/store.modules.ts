import { NgModule } from '@angular/core';
import { StoreComponent } from './store.component';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../Model/model.module';
import { SavedRecipeComponent } from './savedRecipe.component';

@NgModule({
  declarations: [StoreComponent, SavedRecipeComponent],
  imports: [BrowserModule, ModelModule],
  exports: [StoreComponent, SavedRecipeComponent],

  providers: [],
})
export class StoreModule {}
