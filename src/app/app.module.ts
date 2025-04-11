import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/contenedor/inicio/inicio.component';
import { ErrorComponent } from './components/contenedor/error/error.component';
import { FooterComponent } from './components/contenedor/footer/footer.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';


import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ErrorComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(), // ToastrModule added
    // ToastrModule.forRoot() // ToastrModule added
    BsDatepickerModule.forRoot(),
    ModalModule,
    BrowserAnimationsModule


  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
          preset: Aura
      }
  })

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
