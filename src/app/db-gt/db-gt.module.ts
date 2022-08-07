import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgregarComponent } from './agregar/agregar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CaracteresComponent } from './caracteres/caracteres.component';

import { DbGtService } from './service/dbGt.service';



@NgModule({
  declarations: [
    AgregarComponent,
    MainPageComponent,
    CaracteresComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ],
  providers: [
    DbGtService
  ]
})
export class DbGtModule { }
