import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RoundProgressModule,
  ],
  exports: [
    AngularMaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RoundProgressModule,
  ],
})
export class SharedModule {}
