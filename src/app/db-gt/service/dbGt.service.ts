import { Injectable } from "@angular/core";
import { Caracter } from "../interfaces/dbGt.interface";


@Injectable()
export class DbGtService {
    
    private _caracteres: Caracter[] = [

        {
            nombre: 'Pan',
            poder :  100 
        },
        {
            nombre: 'Gyru',
            poder :    10
        }

    ]

    get caracteres(): Caracter[] {
        return [...this._caracteres];
    }

    adicionarPersonaje( elNuevo: Caracter) {
        this._caracteres.push(elNuevo);
    }

    eliminarPersonaje() {

        if(this._caracteres.length === 2) {return}

        this._caracteres.pop()
    }


}