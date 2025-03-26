import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { UsersInfoPageComponent } from './features/users-info/components/users-info-page/users-info-page.component';

const routes: Routes = [
  { path: 'InfoViewer-2', component: UsersInfoPageComponent },
  { path: '', redirectTo: 'InfoViewer-2', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  {
    path: 'abdosakregy.github.io/user-info/users-info',
    redirectTo: 'InfoViewer-2',
    pathMatch: 'full',
  }, //old path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
