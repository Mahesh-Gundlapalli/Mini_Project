import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { RecipeRepository } from './recipes.repository';
import { Saved } from './saved.model';

@NgModule({
  imports: [],
  providers: [StaticDataSource, RecipeRepository, Saved],
})
export class ModelModule {}
