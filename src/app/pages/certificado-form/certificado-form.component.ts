import { Component } from '@angular/core';
import { PrimeryButtonComponent } from "../../_components/primery-button/primery-button.component";
import { SecundaryButtonComponent } from "../../_components/secundary-button/secundary-button.component";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificado-form',
  imports: [
    CommonModule,
    PrimeryButtonComponent, 
    SecundaryButtonComponent, 
    FormsModule
  ],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css'
})
export class CertificadoFormComponent {
  atividade: string = '';

  certificado: Certificado = {
    nome: '',
    atividades: [],
    // data: new Date()
  };

  campoValido(control: NgModel){
    return control.touched && control.invalid;
  }

  formValido(){
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0;
  }

  adicionarAtividade(){
    if (this.atividade.trim() !== '') {
      this.certificado.atividades.push(this.atividade.trim());
      this.atividade = '';
    }
  }

  removeAtividade(index: number) {
    const itemIndex = index;
    if (itemIndex > -1) {
      this.certificado.atividades.splice(itemIndex, 1);
    }
  }

  submit(){
    if (!this.formValido()) {
      return;
    }
    console.log(this.certificado);
  }
}
