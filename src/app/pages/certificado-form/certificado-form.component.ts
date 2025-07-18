import { Component } from '@angular/core';
import { PrimeryButtonComponent } from "../../_components/primery-button/primery-button.component";
import { SecundaryButtonComponent } from "../../_components/secundary-button/secundary-button.component";

@Component({
  selector: 'app-certificado-form',
  imports: [PrimeryButtonComponent, SecundaryButtonComponent],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css'
})
export class CertificadoFormComponent {

}
