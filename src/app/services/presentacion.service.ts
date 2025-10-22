import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresentacionService {
  private datos = {
    nombre: 'REGINA DE LA ROSA CASAS',
    carrera: 'Desarrollo de Software Multiplataforma',
    titulo: 'K-DRAMAS',
    imagen: '/public/images/dramas.png'
  };

  getDatos(){
    return this.datos;
  }
}
