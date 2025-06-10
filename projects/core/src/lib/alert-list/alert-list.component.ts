import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'accessible-alert-list',
  imports: [CommonModule],
  templateUrl: './alert-list.component.html',
  styleUrl: './alert-list.component.css',
  standalone: true
})
export class AlertListComponent {
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
