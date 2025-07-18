import { Component } from '@angular/core';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { PrimeryButtonComponent } from './_components/primery-button/primery-button.component';
import { SecundaryButtonComponent } from './_components/secundary-button/secundary-button.component';
import { ItemCertificadoComponent } from "./_components/item-certificado/item-certificado.component";
import { BaseUiComponent } from "./_components/base-ui/base-ui.component";
import { CertificadosComponent } from "./pages/certificados/certificados.component";
import { CertificadoFormComponent } from "./pages/certificado-form/certificado-form.component";

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    PrimeryButtonComponent,
    SecundaryButtonComponent,
    ItemCertificadoComponent,
    BaseUiComponent,
    CertificadosComponent,
    CertificadoFormComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent {
  title = 'gerador-certificado';
  exibeNavbar : boolean = false;
}
