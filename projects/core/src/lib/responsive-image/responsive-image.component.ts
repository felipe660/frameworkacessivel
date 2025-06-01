import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-responsive-image',
  imports: [CommonModule],
  templateUrl: './responsive-image.component.html',
  styleUrl: './responsive-image.component.css'
})
export class ResponsiveImageComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() maxWidth: string = '100%'; // Ex: "400px", "100%"
  @Input() rounded: boolean = false;
}