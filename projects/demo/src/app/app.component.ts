import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccessibleInputComponent } from '../../../core/src/lib/input/accessible-input.component';
import { ButtonComponent } from "../../../core/src/lib/button/button.component";
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../../core/src/lib/modal/modal.component';
import { TableComponent } from "../../../core/src/lib/table/table.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonComponent, AccessibleInputComponent, CommonModule, ModalComponent, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

enviar() {
  throw new Error('Method not implemented.');
}
  title = 'FrameWork';
  modalOpen = false;
  usuario = {nome: ''};
  headers = ['Nome', 'Email', 'Status'];
  tableData = [
    ['João Silva', 'joao@email.com', 'Ativo'],
    ['Maria Souza', 'maria@email.com', 'Inativo'],
    ['Carlos Lima', 'carlos@email.com', 'Ativo']
  ];

  handleButtonClick() {
    alert('Botão Acessível clicado!');
  }

  openModal() {
    console.log('Modal aberto!');
    console.log(this.modalOpen);
    this.modalOpen  = true;
  }

  closeModal() {
    this.modalOpen = false;
  }
}
