import { CertificadoService } from './../../_services/certificado.service';
import { Component, OnInit } from '@angular/core';
import { SecundaryButtonComponent } from "../../_components/secundary-button/secundary-button.component";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificado',
  imports: [SecundaryButtonComponent, RouterLink],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.css'
})
export class CertificadoComponent implements OnInit { 
  constructor(
    private certificadoService: CertificadoService,
  ) { }

  ngOnInit(): void {
    console.log(this.certificadoService.certificado);
    
  }
}
