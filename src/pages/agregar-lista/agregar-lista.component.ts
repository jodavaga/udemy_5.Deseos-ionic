import { Component, OnInit } from '@angular/core';
import { ListaItem, Lista } from "../../app/clases/index";

import { AlertController } from 'ionic-angular';

@Component({
    selector: 'app-agregar-lista',
    templateUrl: 'agregar-lista.component.html'
})

export class AgregarlistaComponent implements OnInit {
    
    nombreLista: string = "";
    nombreItem: string = "";

    items: ListaItem[] = [];

    lista: Lista; 
    
    constructor( public alertCtrl: AlertController ) { }

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

    agregarLista(){
        
        if (this.nombreLista.length == 0){ 
            let alert = this.alertCtrl.create({
            title: 'Nombre de Lista!',
            subTitle: 'El nombre de la lista es necesario',
            buttons: ['OK']
            });
            alert.present();

        }
    }

    
}