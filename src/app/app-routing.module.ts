import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsFeedComponent} from './screens/news-feed/news-feed.component';
import {LoginComponent} from './screens/login/login.component';
import {RegisterComponent} from './screens/register/register.component';
import {UsersComponent} from './screens/users/users.component';
import {UsersDetailsComponent} from './screens/users/users-details/users-details.component';
import {UsersEditComponent} from './screens/users/users-edit/users-edit.component';
// import {ReviewsAddComponent} from './screens/reviews/reviews-add/reviews-add.component';
// import {ReviewsComponent} from './screens/reviews/reviews.component';
// import {ReviewsDetailsComponent} from './screens/reviews/reviews-details/reviews-details.component';
// import {ReviewsEditComponent} from './screens/reviews/reviews-edit/reviews-edit.component';
// import {IngredientsComponent} from './screens/ingredients/activity-type.component';
// import {IngredientsDetailsComponent} from './screens/ingredients/ingredients-details/ingredients-details.component';
// import {IngredientsEditComponent} from './screens/ingredients/ingredients-edit/ingredients-edit.component';
// import {IngredientsAddComponent} from './screens/ingredients/ingredients-add/ingredients-add.component';
// import {RecipeComponent} from './screens/recipe/recipe.component';
// import {ReceiptAddComponent} from './screens/recipe/receipt-add/receipt-add.component';
// import {RecipeEditComponent} from './screens/recipe/receipt-edit/recipe-edit.component';
// import {ReceiptDetailsComponent} from './screens/recipe/receipt-details/receipt-details.component';
import {AuthGuardService as AuthGuard} from './auth/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'news', component: NewsFeedComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  {path: 'users/:id', component: UsersDetailsComponent, canActivate: [AuthGuard]},
  {path: 'users/edit/:id', component: UsersEditComponent, canActivate: [AuthGuard]},
  // {path: 'recipe-type', component: IngredientsComponent, canActivate: [AuthGuard]},
  // {path: 'recipe-type/add', component: IngredientsAddComponent, canActivate: [AuthGuard]},
  // {path: 'recipe-type/:id', component: IngredientsDetailsComponent, canActivate: [AuthGuard]},
  // {path: 'recipe-type/edit/:id', component: IngredientsEditComponent, canActivate: [AuthGuard]},
  // {path: 'reviews/add', component: ReviewsAddComponent, canActivate: [AuthGuard]},
  // {path: 'events', component: ReviewsComponent, canActivate: [AuthGuard]},
  // {path: 'reviews/:id', component: ReviewsDetailsComponent, canActivate: [AuthGuard]},
  // {path: 'reviews/edit/:id', component: ReviewsEditComponent, canActivate: [AuthGuard]},
  // {path: 'activity', component: RecipeComponent, canActivate: [AuthGuard]},
  // {path: 'recipe/add', component: ReceiptAddComponent, canActivate: [AuthGuard]},
  // {path: 'recipe/:id', component: ReceiptDetailsComponent, canActivate: [AuthGuard]},
  // {path: 'recipe/edit/:id', component: RecipeEditComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
