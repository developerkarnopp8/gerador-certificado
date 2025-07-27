import { Component } from '@angular/core';
import { SecundaryButtonComponent } from "../../_components/secundary-button/secundary-button.component";
import { ItemCertificadoComponent } from "../../_components/item-certificado/item-certificado.component";
import { CertificadoService } from '../../_services/certificado.service';

import { OnInit } from '@angular/core'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificados',
  imports: [
    ItemCertificadoComponent, 
    SecundaryButtonComponent, 
    RouterLink
  ],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent implements OnInit {
  // certificado: Certificados[] = [];

  // constructor(
  //   private certificadoService: CertificadoService
  // ) { }

  ngOnInit(): void {
    // this.certificado = this.certificadoService.certificados;
  }
}
