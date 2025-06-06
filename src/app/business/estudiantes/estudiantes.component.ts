import { Component } from '@angular/core';
import { ApiEstudianteService } from '../../shared/services/api-estudiante/api-estudiante.service';
import { EstudianteCreate } from '../models/estudiante-crear';
import { Estudiante } from '../models/estudiante';
import { ModalEstudianteComponent } from '../../modal/modal-estudiante/modal-estudiante.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estudiantes',
  imports: [ModalEstudianteComponent, CommonModule],
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.css'
})
export class EstudiantesComponent {
  isModalVisible: boolean = false;
  actionType: string = '';
  currentItem: any = {};

  openModal(action:string , item:any = {}){
    this.isModalVisible = true;
    this.actionType = action;
    this.currentItem = item;
  }

  closeModal( isVisible:boolean = false){
    this.isModalVisible = isVisible;
    this.actionType = '';
    this.currentItem = {};
  }

  onActionConfirmed(event: any) {
    console.log('Action confirmed:',event.action, event.item);
    this.closeModal();
  }
}
