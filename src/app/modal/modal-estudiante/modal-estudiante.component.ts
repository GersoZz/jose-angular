import { Component,EventEmitter, HostListener, Input, Output } from '@angular/core';
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

  @Output() closeModal = new EventEmitter()
  
  constructor(private estudianteService: ApiEstudianteService) {}

  close() {
    this.isVisible = false;
    this.closeModal.emit(false)
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    console.log("🚀")
    const targetElement = event.target as HTMLElement

    if (!targetElement.closest('#modal-estudiante') && this.isVisible) {
      this.close()
    }
  }

  confirmAction() {
    if (this.actionType.toLocaleLowerCase() === 'añadir') {
      this.addEstudiante();
    } else if (this.actionType.toLocaleLowerCase() === 'editar') {
      this.updateEstudiante();
    }
  }

  addEstudiante() {
    console.log(this.item);

    setTimeout(() => {
        this.close();
    }, 2000);

    // this.estudianteService.createEstudiante(this.item).subscribe({
    //   next: (estudiante) => {
    //     console.log('Estudiante añadido:', estudiante);
    //     this.close();
    //   },
    //   error: (error) => {
    //     console.error('Error al añadir estudiante:', error);
    //   }
    // });
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