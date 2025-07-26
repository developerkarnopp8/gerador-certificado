import { Component } from '@angular/core';
import { SecundaryButtonComponent } from "../secundary-button/secundary-button.component";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  imports: [SecundaryButtonComponent, RouterLink],
  templateUrl: './item-certificado.component.html',
  styleUrl: './item-certificado.component.css'
})
export class ItemCertificadoComponent {
 id: string = '5'

 constructor(
    private router: Router,
  ) { }

  redirecionaCertificado() {
    this.router.navigate(['/certificado', this.id]);
  }
}
