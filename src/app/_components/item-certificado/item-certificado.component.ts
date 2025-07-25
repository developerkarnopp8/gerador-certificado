import { Component } from '@angular/core';
import { SecundaryButtonComponent } from "../secundary-button/secundary-button.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  imports: [SecundaryButtonComponent, RouterLink],
  templateUrl: './item-certificado.component.html',
  styleUrl: './item-certificado.component.css'
})
export class ItemCertificadoComponent {
 id: string = '5'
}
