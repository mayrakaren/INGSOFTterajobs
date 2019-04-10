import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Comentario de Guillermo Alcaraz :v
//Comentario de Brian Muñoz
//Comentario de Jaylene Sevilla
