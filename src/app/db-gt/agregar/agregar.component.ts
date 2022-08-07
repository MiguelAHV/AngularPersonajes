import { Component } from '@angular/core';


import { Caracter } from "../interfaces/dbGt.interface";
import { DbGtService } from '../service/dbGt.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent  {

  
  nuevo: Caracter = {
    nombre: '',
    poder : null
  }

  constructor( private personajeServicie: DbGtService) { }

  agregarCaracter() {
    
    if( this.nuevo.nombre.length === 0 ) { return};

    this.personajeServicie.adicionarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder : null
    }
    
  }

  borrarUltimo() {
    this.personajeServicie.eliminarPersonaje()
  }

  

  
}
