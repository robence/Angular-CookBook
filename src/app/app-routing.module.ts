import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsFeedComponent} from './screens/news-feed/news-feed.component';
import {LoginComponent} from './screens/login/login.component';
import {RegisterComponent} from './screens/register/register.component';
import {UsersComponent} from './screens/users/users.component';
import {UsersDetailsComponent} from './screens/users/users-details/users-details.component';
import {UsersEditComponent} from './screens/users/users-edit/users-edit.component';
import {ReviewsAddComponent} from './screens/reviews/reviews-add/reviews-add.component';
import {ReviewsComponent} from './screens/reviews/reviews.component';
import {ReviewsDetailsComponent} from './screens/reviews/reviews-details/reviews-details.component';
import {ReviewsEditComponent} from './screens/reviews/reviews-edit/reviews-edit.component';
import {IngredientsComponent} from './screens/ingredients/ingredients.component';
import {IngredientsEditComponent} from './screens/ingredients/ingredients-edit/ingredients-edit.component';
import {IngredientsAddComponent} from './screens/ingredients/ingredients-add/ingredients-add.component';
import {RecipeComponent} from './screens/recipe/recipe.component';
import {ReceiptAddComponent} from './screens/recipe/recipe-add/receipt-add.component';
import {RecipeEditComponent} from './screens/recipe/recipe-edit/recipe-edit.component';
import {ReceiptDetailsComponent} from './screens/recipe/recipe-details/receipt-details.component';
import {AuthGuardService as AuthGuard} from './auth/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'news', component: NewsFeedComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  {path: 'users/:id', component: UsersDetailsComponent, canActivate: [AuthGuard]},
  {path: 'users/edit/:id', component: UsersEditComponent, canActivate: [AuthGuard]},
  {path: 'ingredients', component: IngredientsComponent, canActivate: [AuthGuard]},
  {path: 'ingredients/add', component: IngredientsAddComponent, canActivate: [AuthGuard]},
  {path: 'ingredients/edit/:id', component: IngredientsEditComponent, canActivate: [AuthGuard]},
  {path: 'reviews/add', component: ReviewsAddComponent, canActivate: [AuthGuard]},
  {path: 'reviews', component: ReviewsComponent, canActivate: [AuthGuard]},
  {path: 'reviews/:id', component: ReviewsDetailsComponent, canActivate: [AuthGuard]},
  {path: 'reviews/edit/:id', component: ReviewsEditComponent, canActivate: [AuthGuard]},
  {path: 'recipe', component: RecipeComponent, canActivate: [AuthGuard]},
  {path: 'recipe/add', component: ReceiptAddComponent, canActivate: [AuthGuard]},
  {path: 'recipe/:id', component: ReceiptDetailsComponent, canActivate: [AuthGuard]},
  {path: 'recipe/edit/:id', component: RecipeEditComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
