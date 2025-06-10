import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'warning-alert-list',
  imports: [CommonModule],
  templateUrl: './warning-alert-list.component.html',
  styleUrl: './warning-alert-list.component.css'
})
export class WarningAlertListComponent {
  @Input() messages: { id: number; text: string; ativo: boolean }[] = [];
  @Input() className: string = '';
  @Output() dismiss = new EventEmitter<number>();

  // Getter que retorna apenas os alertas ativos
  get mensagensAtivas() {
    return this.messages.filter(m => m.ativo);
  }

  // Emite o ID da mensagem a ser ocultada
  remove(id: number) {
    this.dismiss.emit(id);
  }
}
