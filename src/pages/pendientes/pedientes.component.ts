import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListaDeseosService } from "../../app/services/lista-deseos.service";
import { AgregarlistaComponent } from "../agregar-lista/agregar-lista.component";
import { DetalleComponent } from "../detalle/detalle.component";

@Component({
    selector: 'app-pendientes',
    templateUrl: 'pendientes.component.html'
})

export class PendientesComponent implements OnInit {
      

    constructor( private _listaDeseos: ListaDeseosService, 
                 private navCtrl : NavController   
    ) { }

    ngOnInit() {  

    }

     irAgregar(){
        this.navCtrl.push(AgregarlistaComponent);
    }  

    verDetalle( lista, idx ){
        this.navCtrl.push( DetalleComponent, { lista, idx } );

        // console.log(lista.items);

    }
}