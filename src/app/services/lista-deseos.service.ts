import { Injectable } from '@angular/core';

import { Lista } from "../clases/lista";

@Injectable()
export class ListaDeseosService {

    listas: Lista[] = [];

    constructor( ) { 

        console.log("Sevicio de deseos listo para usar!!");

        // let lista1 = new Lista("compras super");
        // let lista2 = new Lista("Cosas univerisidad");
        // let lista3 = new Lista("juegos que deseo");

        // this.listas.push(lista1);
        // this.listas.push(lista2);
        // this.listas.push(lista3);

        this.cargarData();
    
    }

    actualizarData (){
        localStorage.setItem( "data", JSON.stringify(this.listas) );
    }

    cargarData(){
        if ( JSON.parse(localStorage.getItem( "data" ) ) ){
            this.listas = JSON.parse(localStorage.getItem( "data" ) ); 
        }
    }

    agregarlista( lista:Lista ){
        this.listas.push( lista );
        this.actualizarData();
    }
}