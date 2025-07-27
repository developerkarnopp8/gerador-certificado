import { Injectable } from '@angular/core';
import { Certificado } from '../interfaces/certificado';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {
  certificado: Certificado[] = [];
  constructor() { }

  adicionarCertificado(certificado: Certificado) {
    this.certificado.push({...certificado});
    localStorage.setItem('certificados', JSON.stringify(this.certificado));
  }
}
