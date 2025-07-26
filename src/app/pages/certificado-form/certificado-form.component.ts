import { Component } from '@angular/core';
import { PrimeryButtonComponent } from "../../_components/primery-button/primery-button.component";
import { SecundaryButtonComponent } from "../../_components/secundary-button/secundary-button.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-certificado-form',
  imports: [PrimeryButtonComponent, SecundaryButtonComponent, FormsModule],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css'
})
export class CertificadoFormComponent {
  nome: string = '';
  atividade: string = '';
  data: string = '';
  atividades: string[] = [
    'Angular',
    'React',
    'Vue',
  ]
}
