import { Component, Input } from '@angular/core';
import { SecundaryButtonComponent } from "../secundary-button/secundary-button.component";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  imports: [SecundaryButtonComponent, RouterLink],
  templateUrl: './item-certificado.component.html',
  styleUrl: './item-certificado.component.css'
})
export class ItemCertificadoComponent {
 @Input() nomeAluno: string = '';
 @Input() dataEmissao: string = '';
 @Input() id: string | undefined = '';

 constructor(
    private router: Router,
  ) { }

  redirecionaCertificado() {
    this.router.navigate(['/certificado', this.id]);
  }
}
