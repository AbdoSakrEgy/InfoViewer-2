import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { UsersInfoPageComponent } from './features/users-info/components/users-info-page/users-info-page.component';

const routes: Routes = [
  { path: 'users-info', component: UsersInfoPageComponent },
  { path: '', redirectTo: 'users-info', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
