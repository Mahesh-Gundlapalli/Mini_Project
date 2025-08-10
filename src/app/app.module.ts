import { SavedRecipeComponent } from './Store/savedRecipe.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from './Store/store.modules';

import { RouterModule } from '@angular/router';
import { StoreComponent } from './Store/store.component';
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'saved',
        component: SavedRecipeComponent,
      },
      {
        path: 'store',
        component: StoreComponent,
      },

      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      },

      {
        path: '**',
        component: StoreComponent,
      },
    ]),
    StoreModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
