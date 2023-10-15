import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, AngularMaterialModule, RouterModule, FormsModule],
  exports: [AngularMaterialModule, RouterModule, FormsModule],
})
export class SharedModule {}
