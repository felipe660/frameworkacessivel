import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'accessible-dropdown',
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
  standalone: true
})
export class DropdownComponent {
  @Input() label: string = 'Menu';
  @Input() options: string[] = [];
  @Output() selected = new EventEmitter<string>();

  aberto = false;
  focusedIndex = -1;

  constructor(private eRef: ElementRef) {}

  toggle() {
    this.aberto = !this.aberto;
    if (this.aberto) {
      this.focusedIndex = 0;
    }
  }

  fechar() {
    this.aberto = false;
    this.focusedIndex = -1;
  }

  selecionar(opcao: string) {
    this.selected.emit(opcao);
    this.fechar();
  }

  @HostListener('document:click', ['$event'])
  clickFora(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.fechar();
    }
  }

  @HostListener('keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent) {
    if (!this.aberto) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.focusedIndex = (this.focusedIndex + 1) % this.options.length;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.focusedIndex = (this.focusedIndex - 1 + this.options.length) % this.options.length;
    }

    if (event.key === 'Enter') {
      event.preventDefault();
      if (this.focusedIndex >= 0) {
        this.selecionar(this.options[this.focusedIndex]);
      }
    }

    if (event.key === 'Escape') {
      this.fechar();
    }
  }
}
