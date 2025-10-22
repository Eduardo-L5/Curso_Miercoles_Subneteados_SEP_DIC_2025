import { Component } from '@angular/core';
import { PresentacionService } from '../../services/presentacion.service';

@Component({
  selector: 'app-presentacion',
  imports: [],
  templateUrl: './presentacion.html',
  styleUrl: './presentacion.scss'
})
export class Presentacion {
  nombre = '';
  carrera = '';
  titulo = '';
  imagen = '';

   constructor(private presentacionService: PresentacionService) {
    // Se obtuvieron los datos del servicio
    const datos = this.presentacionService.getDatos();
    this.nombre = datos.nombre;
    this.carrera = datos.carrera;
    this.titulo = datos.titulo;
    this.imagen = datos.imagen;
  }
}
