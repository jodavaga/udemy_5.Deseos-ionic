import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { PendientesComponent } from "../pages/pendientes/pedientes.component";
import { TerminadasComponent } from "../pages/terminadas/terminadas.component";
import { AgregarlistaComponent } from "../pages/agregar-lista/agregar-lista.component";

//Servicios
import { ListaDeseosService } from "./services/lista-deseos.service";

//Pipes
import { PlaceholderPipe  } from "./pipes/placeholder.pipe";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TerminadasComponent,
    PendientesComponent,
    AgregarlistaComponent,
    PlaceholderPipe,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TerminadasComponent,
    PendientesComponent,
    AgregarlistaComponent,
    TabsPage
  ],
  providers: [
    ListaDeseosService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
