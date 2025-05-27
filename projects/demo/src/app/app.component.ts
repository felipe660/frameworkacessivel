import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccessibleInputComponent } from '../../../core/src/lib/accessible-input/accessible-input.component';
import { ButtonComponent } from "../../../core/src/lib/button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonComponent, AccessibleInputComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
enviar() {
throw new Error('Method not implemented.');
}
  title = 'demo';
  usuario = {nome: ''};
   handleButtonClick() {
    alert('Botão Acessível clicado!');
  }
}
