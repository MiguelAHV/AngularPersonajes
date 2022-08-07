import { Component } from '@angular/core';
import { DbGtService } from '../service/dbGt.service';

@Component({
  selector: 'app-caracteres',
  templateUrl: './caracteres.component.html',
  styleUrls: ['./caracteres.component.scss']
})
export class CaracteresComponent  {


  obtenerCaracteres() {
    return this.personajeServicie.caracteres;
  }

  constructor( private personajeServicie: DbGtService) { }

  
}
