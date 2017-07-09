import { Component, OnInit } from '@angular/core';
import { ListaItem, Lista } from "../../app/clases/index";
import { ListaDeseosService } from "../../app/services/lista-deseos.service";

import { AlertController, NavController } from 'ionic-angular';

@Component({
    selector: 'app-agregar-lista',
    templateUrl: 'agregar-lista.component.html'
})

export class AgregarlistaComponent implements OnInit {
    
    nombreLista: string = "";
    nombreItem: string = "";

    items: ListaItem[] = [];
    
    constructor( 
        public alertCtrl: AlertController,
        public navCtrl: NavController,
        public _listaDeseos:ListaDeseosService
    ) { }

    ngOnInit() { }

    agregarItem(){

        if (this.nombreItem.length == 0){
            return;
        }

        let item = new ListaItem();
        item.nombre = this.nombreItem;
        
        this.items.push( item );
        this.nombreItem = "";

    }

    borrarItem( idx:number ){
        this.items.splice(idx, 1);
    }

    guardarLista(){
        
        if (this.nombreLista.length == 0){ 
            let alert = this.alertCtrl.create({
            title: 'Nombre de Lista!',
            subTitle: 'El nombre de la lista es necesario',
            buttons: ['OK']
            });
            alert.present();
            return;
        }

        let lista = new Lista( this.nombreLista );
        lista.items = this.items;
        // this._listaDeseos.listas.push( lista );
        this._listaDeseos.agregarlista( lista );
        
        this.navCtrl.pop();

    }

    
}