import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './components/admin-dashboard/add-recipe/add-recipe.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NotAuthorizedComponent } from './components/common/not-authorized/not-authorized.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecipeListDetailsComponent } from './components/dashboard/recipe-list-details/recipe-list-details.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: '/przepisy', pathMatch: 'full' },
  { path: 'admin', component: AdminDashboardComponent},
  { path: 'add-recipe', component: AddRecipeComponent, canActivate: [AdminGuard] },
  { path: '404', component: NotAuthorizedComponent},
  { path: 'przepisy', component: DashboardComponent },
  { path: 'przepis/:id', component: RecipeListDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
