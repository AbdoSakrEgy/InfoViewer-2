import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, SidenavComponent, PageNotFoundComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent, SidenavComponent, PageNotFoundComponent],
})
export class CoreModule {}
