import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NewsFeedComponent} from './screens/news-feed/news-feed.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './screens/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {RegisterComponent} from './screens/register/register.component';
import {UsersComponent} from './screens/users/users.component';
import {UsersDetailsComponent} from './screens/users/users-details/users-details.component';
import {UsersEditComponent} from './screens/users/users-edit/users-edit.component';
// import {IngredientsComponent} from './screens/ingredients/ingredients.component';
// import {IngredientsDetailsComponent} from './screens/ingredients/ingredients-details/ingredients-details.component';
// import {IngredientsEditComponent} from './screens/ingredients/ingredients-edit/ingredients-edit.component';
// import {IngredientsAddComponent} from './screens/ingredients/ingredients-add/ingredients-add.component';
// import {ReviewsComponent} from './screens/reviews/reviews.component';
// import {ReviewsAddComponent} from './screens/reviews/reviews-add/reviews-add.component';
// import {ReviewsEditComponent} from './screens/reviews/reviews-edit/reviews-edit.component';
// import {ReviewsDetailsComponent} from './screens/reviews/reviews-details/reviews-details.component';
import {MaterialModule} from './material.module';
// import {RecipeComponent} from './screens/recipe/recipe.component';
// import {ReceiptAddComponent} from './screens/recipe/receipt-add/receipt-add.component';
// import {RecipeEditComponent} from './screens/recipe/receipt-edit/recipe-edit.component';
// import {ReceiptDetailsComponent} from './screens/recipe/receipt-details/receipt-details.component';

import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NewsFeedComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    UsersDetailsComponent,
    UsersEditComponent
    // IngredientsComponent,
    // IngredientsDetailsComponent,
    // IngredientsEditComponent,
    // IngredientsAddComponent,
    // ReviewsAddComponent,
    // ReviewsComponent,
    // ReviewsDetailsComponent,
    // ReviewsEditComponent,
    // RecipeComponent,
    // ReceiptAddComponent,
    // RecipeEditComponent,
    // ReceiptDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
