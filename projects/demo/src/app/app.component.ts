import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccessibleInputComponent } from '../../../core/src/lib/accessible-input/accessible-input.component';
import { ButtonComponent } from "../../../core/src/lib/button/button.component";
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../../core/src/lib/modal/modal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonComponent, AccessibleInputComponent,CommonModule, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

enviar() {
  throw new Error('Method not implemented.');
}
  title = 'demo';
  modalOpen = false;
  usuario = {nome: ''};

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
