import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarruselComponent } from './carrusel/carrusel.component';

import { FormasComponent } from './formas/formas.component';

import { FooterComponent } from './footer/footer.component';

import { ReproductorComponent } from './reproductor/reproductor.component';


@NgModule({
  declarations: [
    AppComponent,

    CarruselComponent


    FormasComponent


    ReproductorComponent

    FooterComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
