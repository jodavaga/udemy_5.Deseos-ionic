import { Component, OnInit } from '@angular/core';
import { Lista, ListaItem } from "../../app/clases/index";

import { ListaDeseosService } from "../../app/services/lista-deseos.service";

import { NavParams, NavController } from "ionic-angular";

@Component({
    selector: 'app-detalle',
    templateUrl: 'detalle.component.html'
})

export class DetalleComponent implements OnInit {

    idx: number;
    lista: Lista;

    constructor(
        public navParams:NavParams,
        public navCtrl:NavController,
        public _listaDeseos: ListaDeseosService
    ) { 

        console.log(navParams);

        this.idx = navParams.get( "idx" );
        this.lista = navParams.get( "lista" );

    }

    ngOnInit() { }

    actualizar( item: ListaItem ){

        item.completado = !item.completado;
        this._listaDeseos.actualizarData();
        
    }




}