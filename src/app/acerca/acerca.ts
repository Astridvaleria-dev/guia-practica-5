import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-acerca',
  imports: [FormsModule],
  templateUrl: './acerca.html',
  styleUrl: './acerca.css',
})
export class Acerca {
  desarrollador: string = 'Joseph Montoya';
  version: string = '1.0.0';
  fecha: string = 'Octubre 2025';

  mostrarInformacion() {
    alert(`Desarrollado por: ${this.desarrollador}\nVersión: ${this.version}\nFecha: ${this.fecha}`);
  }

  cambiarDesarrollador() {
    this.desarrollador = 'Carlos Rodriguez';
  }
}