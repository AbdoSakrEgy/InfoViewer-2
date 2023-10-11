import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
