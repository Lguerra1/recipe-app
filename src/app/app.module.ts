import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './headerLayout/header.component';
import { ShoppingList } from './shoppingListLayout/shoppingList/shoppingList.component';
import { ShoppingListEdit } from './shoppingListLayout/shoppingList/shoppingListEdit/shoppingListEdit.component';
import { RecipeDetail } from './recipeBookLayout/recipeDetail/recipeDetail.component';
import { RecipeItem } from './recipeBookLayout/recipeList/recipeItem/recipeItem.component';
import { RecipeList } from './recipeBookLayout/recipeList/recipeList.component';
import { RecipeBookLayout } from './recipeBookLayout/recipeBookLayout.component';
import { ShoppingListLayout } from './shoppingListLayout/shoppingListLayout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeBookLayout,
    RecipeList,
    RecipeDetail,
    RecipeItem,
    ShoppingListLayout,
    ShoppingList,
    ShoppingListEdit,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
