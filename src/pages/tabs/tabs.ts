import { Component } from '@angular/core';

import { PendientesComponent } from "../pendientes/pedientes.component";
import { TerminadasComponent } from "../terminadas/terminadas.component";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  
  tab1Root = PendientesComponent;
  tab2Root = TerminadasComponent;

  constructor() {

  }
}
