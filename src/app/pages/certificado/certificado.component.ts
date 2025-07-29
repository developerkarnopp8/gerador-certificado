import { CertificadoService } from './../../_services/certificado.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SecundaryButtonComponent } from "../../_components/secundary-button/secundary-button.component";
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Certificado } from '../../interfaces/certificado';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-certificado',
  imports: [SecundaryButtonComponent, RouterLink],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.css'
})
export class CertificadoComponent implements OnInit { 
  id: string | null = null;
  certificado: Certificado | undefined;
  @ViewChild('certificadoContainer') certificadoElement! : ElementRef;
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

  downloadCetificado(){
    if (this.certificado == undefined) return;
    html2canvas(this.certificadoElement.nativeElement, {scale: 2}).then(canvas => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `certificado-${this.certificado?.nome.replaceAll(' ', '-')}.png`;
      link.click();
    })
  }

}
