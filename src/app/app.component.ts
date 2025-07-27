import { CertificadoService } from './_services/certificado.service';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { BaseUiComponent } from "./_components/base-ui/base-ui.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    BaseUiComponent,
    RouterOutlet
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent implements OnInit {
  title = 'gerador-certificado';
  exibeNavbar : boolean = false;

  constructor(
    private certificadoService: CertificadoService,
  ) { }

  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados');
    this.certificadoService.certificado = certificados ? JSON.parse(certificados) : [];

  }
}
