import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'accessible-select',
  imports: [CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  @Input() label: string = 'Selecione uma opção';
  @Input() id: string = 'select-id';
  @Input() options: { label: string, value: string }[] = [];
  @Input() selected: string = '';

  @Output() selectedChange = new EventEmitter<string>();

  onChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.selected = value;
    this.selectedChange.emit(value);
  }
}