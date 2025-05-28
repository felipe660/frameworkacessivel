import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccessibleInputComponent } from '../../../core/src/lib/input/accessible-input.component';
import { ButtonComponent } from "../../../core/src/lib/button/button.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../../core/src/lib/modal/modal.component';
import { TableComponent } from "../../../core/src/lib/table/table.component";
import { SelectComponent } from "../../../core/src/lib/select/select.component";
import { AlertListComponent } from "../../../core/src/lib/alert-list/alert-list.component";
import { CollapseComponent } from "../../../core/src/lib/collapse/collapse.component";
import { DropdownComponent } from "../../../core/src/lib/dropdown/dropdown.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonComponent, AccessibleInputComponent, CommonModule, ModalComponent, TableComponent, SelectComponent, AlertListComponent, FormsModule, CollapseComponent, DropdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title = 'FrameWork';
  statusSelecionado = '';
  novaMensagem = '';
  modalOpen = false;
  usuario = {nome: ''};
  headers = ['Nome', 'Email', 'Status'];
  tableData = [
    ['João Silva', 'joao@email.com', 'Ativo'],
    ['Maria Souza', 'maria@email.com', 'Inativo'],
    ['Carlos Lima', 'carlos@email.com', 'Ativo']
  ];
  statusOptions = [
  { label: 'Ativo', value: 'ativo' },
  { label: 'Inativo', value: 'inativo' },
  { label: 'Pendente', value: 'pendente' }
  ];
  alertas = [
  { id: 1, text: 'Bem-vindo!', ativo: true },
  { id: 2, text: 'Seu perfil foi atualizado.', ativo: true }
  ];

  opcoesMenu = ['Perfil', 'Configurações', 'Sair'];

  selecionarOpcao(opcao: string) {
    alert(`Opção selecionada: ${opcao}`);
  }

  enviar() {
    throw new Error('Method not implemented.');
  }

  addAlert() {
    if (this.novaMensagem.trim()) {
      const novoId = this.alertas.length > 0 ? Math.max(...this.alertas.map(m => m.id)) + 1 : 1;
      this.alertas.push({
        id: novoId,
        text: this.novaMensagem.trim(),
        ativo: true
      });
      this.novaMensagem = ''; // limpa o campo
    }
  }

  removeAlert(id: number) {
    const alerta = this.alertas.find(msg => msg.id === id);
    if (alerta) {
      alerta.ativo = false;
    }
  }

  handleButtonClick() {
    alert('Botão Acessível clicado!');
  }

  openModal() {
    console.log('Modal aberto!');
    console.log(this.modalOpen);
    this.modalOpen  = true;
  }

  closeModal() {
    this.modalOpen = false;
  }
}
