import { Component } from '@angular/core';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { PrimeryButtonComponent } from './_components/primery-button/primery-button.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, PrimeryButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent {
  title = 'gerador-certificado';
  exibeNavbar : boolean = false;
}
