
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EditRecipeComponent } from './edit-recipe.component';
import { AddRecipeComponent } from './add-recipe.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'edit/:id', component: EditRecipeComponent },
  { path: 'add', component: AddRecipeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
