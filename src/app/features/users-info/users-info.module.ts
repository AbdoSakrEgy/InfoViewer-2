import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UsersCommentsComponent } from './components/users-comments/users-comments.component';
import { UsersStatsComponent } from './components/users-stats/users-stats.component';
import { UsersInfoPageComponent } from './components/users-info-page/users-info-page.component';

@NgModule({
  declarations: [
    UsersInfoPageComponent,
    UsersTableComponent,
    UsersCommentsComponent,
    UsersStatsComponent,
  ],
  imports: [CommonModule],
  exports: [
    UsersInfoPageComponent,
    UsersTableComponent,
    UsersCommentsComponent,
    UsersStatsComponent,
  ],
})
export class UsersInfoModule {}
