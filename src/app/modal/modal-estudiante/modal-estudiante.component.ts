import { Component, Input } from '@angular/core';
import { EstudianteCreate } from '../../business/models/estudiante-crear';
import { Estudiante } from '../../business/models/estudiante';
import { ApiEstudianteService } from '../../shared/services/api-estudiante/api-estudiante.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-estudiante',
  imports: [FormsModule,CommonModule],
  templateUrl: './modal-estudiante.component.html',
  styleUrl: './modal-estudiante.component.css'
})
export class ModalEstudianteComponent {
  @Input() isVisible: boolean = false;
  @Input() actionType: string = '';
  @Input() item: EstudianteCreate = { nombre: '', direccion: '', telefono: '' };
  @Input() estudiante: Estudiante | null = null;

  constructor(private estudianteService: ApiEstudianteService) {}

  close() {
    this.isVisible = false;
  }

  confirmAction() {
    if (this.actionType === 'añadir') {
      this.addEstudiante();
    } else if (this.actionType === 'editar') {
      this.updateEstudiante();
    }
  }

  addEstudiante() {
    this.estudianteService.createEstudiante(this.item).subscribe({
      next: (estudiante) => {
        console.log('Estudiante añadido:', estudiante);
        this.close();
      },
      error: (error) => {
        console.error('Error al añadir estudiante:', error);
      }
    });
  }

  updateEstudiante() {
    if (this.estudiante) {
      const updateEstudiante: Estudiante = {
        id: this.estudiante.id,
        ...this.item
      };
      this.estudianteService.updateEstudiante(updateEstudiante).subscribe({
        next: (res:any) => {
          console.log('Estudiante actualizado:', res);
          this.close();
        },
        error: (error:any) => {
          console.error('Error al actualizar estudiante:', error);
        }
      });
    }
  }
}