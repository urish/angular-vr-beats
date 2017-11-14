import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import 'aframe-fireball-component';
import 'aframe-starnest-component';
import 'aframe-animation-component';
import { AframePipe } from './aframe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AframePipe
  ],
  imports: [
    BrowserModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
