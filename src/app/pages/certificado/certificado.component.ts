import { CertificadoService } from './../../_services/certificado.service';
import { Component, OnInit } from '@angular/core';
import { SecundaryButtonComponent } from "../../_components/secundary-button/secundary-button.component";
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Certificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificado',
  imports: [SecundaryButtonComponent, RouterLink],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.css'
})
export class CertificadoComponent implements OnInit { 
  id: string | null = null;
  certificado: Certificado | undefined;
  constructor(
    private certificadoService: CertificadoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.certificado = this.certificadoService.certificado.find((certificado: Certificado) => certificado.id === this.id);
    })
    
  }
}
