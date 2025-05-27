import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'accessible-input',
  imports: [CommonModule],
  templateUrl: './accessible-input.component.html',
  styleUrl: './accessible-input.component.css'
})
export class AccessibleInputComponent {
  @Input() label: string = '';
  @Input() ariaLabel: string = '';
  @Input() placeholder: string = '';
  @Input() id: string = 'input-id';

  // Aqui acontece o binding bidirecional
  @Input() modelValue: string = '';
  @Output() modelValueChange = new EventEmitter<string>();

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.modelValue = input.value;
    this.modelValueChange.emit(this.modelValue);
  }
}
