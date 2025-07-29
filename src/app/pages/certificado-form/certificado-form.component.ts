import { Component, ViewChild } from '@angular/core';
import { PrimeryButtonComponent } from "../../_components/primery-button/primery-button.component";
import { SecundaryButtonComponent } from "../../_components/secundary-button/secundary-button.component";
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../interfaces/certificado';
import { CertificadoService } from '../../_services/certificado.service';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

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
    id: '',
    nome: '',
    atividades: [],
    data: ''
  };

  @ViewChild('form') form!: NgForm;

  constructor(
    private certificadoService: CertificadoService,
    private route: Router
  ) { }

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
    this.certificado.data = this.dataAtual();
    this.certificado.id = uuidv4()
    this.certificadoService.adicionarCertificado(this.certificado);


    // this.limparForm();
    // this.form.resetForm();
    this.route.navigate(['/certificado/', this.certificado.id]);

  }

  dataAtual(){
    const hoje = new Date();
    const dia = hoje.getDate().toString().padStart(2, '0');
    const mes = (hoje.getMonth() + 1).toString().padStart(2, '0');
    const ano = hoje.getFullYear();  

    return `${dia}/${mes}/${ano}`;
  }

  limparForm() {
    this.certificado = {
      id: '',
      nome: '',
      atividades: [],
      data: ''
    };
    this.atividade = '';
  }
}
