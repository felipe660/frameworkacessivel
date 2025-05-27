import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'lib-modal',
  standalone: true, // 👈 adicione esta linha
  imports: [CommonModule, ButtonComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() titulo: string = '';
  @Input() descricao: string = '';
  @Input() aberto: boolean = false;
  @Output() fechado = new EventEmitter<void>();

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    if (this.aberto) {
      setTimeout(() => {
        const modal = this.el.nativeElement.querySelector('.modal');
        modal?.focus();
      }, 0);
    }
  }

  fecharModal() {
    this.fechado.emit();
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEsc(event: KeyboardEvent) {
    if (this.aberto) {
      event.preventDefault();
      this.fecharModal();
    }
  }
}
