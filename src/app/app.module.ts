import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { SobrenosotrosComponent } from './paginas/sobrenosotros/sobrenosotros.component';
import { ImagenesComponent } from './paginas/imagenes/imagenes.component';
import { DonacionComponent } from './paginas/donacion/donacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobrenosotrosComponent,
    ImagenesComponent,
    DonacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
