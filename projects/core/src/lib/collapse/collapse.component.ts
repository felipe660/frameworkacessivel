import { Component, Input } from '@angular/core';

@Component({
  selector: 'accessible-collapse',
  imports: [],
  templateUrl: './collapse.component.html',
  styleUrl: './collapse.component.css'
})
export class CollapseComponent {
  @Input() titulo: string = '';
  aberto = false; 

  toggle() {
    this.aberto = !this.aberto;
  }
}
