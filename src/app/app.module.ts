// tslint:disable-next-line:import-spacing
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// tslint:disable-next-line:import-spacing
import { FormsModule }   from '@angular/forms';
// tslint:disable-next-line:import-spacing
import { AppComponent }   from './app.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

/*
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/
