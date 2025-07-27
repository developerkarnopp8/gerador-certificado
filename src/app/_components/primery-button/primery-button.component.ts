import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primery-button',
  imports: [CommonModule],
  templateUrl: './primery-button.component.html',
  styleUrl: './primery-button.component.css'
})
export class PrimeryButtonComponent {
  @Input() textoBotao: string = '';
  @Input() disabled: boolean = false;
}
