import { Component } from '@angular/core';
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
import { ResponsiveImageComponent } from '../../../core/src/lib/responsive-image/responsive-image.component';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent, ResponsiveImageComponent, AccessibleInputComponent, CommonModule, ModalComponent, TableComponent, SelectComponent, AlertListComponent, FormsModule, CollapseComponent, DropdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title = 'FrameWork';
  selectStatus = '';
  newMsg = '';
  modalOpen = false;
  user = {name: ''};
  headers = ['Nome', 'Email', 'Status'];
  tableData = [
    ['João Silva', 'joao@email.com', 'Ativo'],
    ['Maria Souza', 'maria@email.com', 'Inativo'],
    ['Carlos Lima', 'carlos@email.com', 'Ativo']
  ];
  statusOptions = [
  { label: 'Ativo', value: 'Ativo' },
  { label: 'Inativo', value: 'Inativo' },
  { label: 'Pendente', value: 'Pendente' }
  ];
  alerts = [
  { id: 1, text: 'Bem-vindo!', ativo: true },
  ];

  menuOptions = ['Perfil', 'Configurações', 'Sair'];

  selectOption(opcao: string) {
    alert(`Opção selecionada: ${opcao}`);
  }

  send() {
    throw new Error('Method not implemented.');
  }

  addAlert() {
    if (this.newMsg.trim()) {
      const novoId = this.alerts.length > 0 ? Math.max(...this.alerts.map(m => m.id)) + 1 : 1;
      this.alerts.push({
        id: novoId,
        text: this.newMsg.trim(),
        ativo: true
      });
      this.newMsg = ''; // limpa o campo
    }
  }

  removeAlert(id: number) {
    const alerta = this.alerts.find(msg => msg.id === id);
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
