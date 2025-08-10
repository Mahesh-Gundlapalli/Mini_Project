import { AddRecipeComponent } from './add-recipe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { EditRecipeComponent } from './edit-recipe.component';

@NgModule({
  declarations: [
    AdminComponent,
    EditRecipeComponent,
    AddRecipeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule {}

