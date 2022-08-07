import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DbGtModule } from './db-gt/db-gt.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    DbGtModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
