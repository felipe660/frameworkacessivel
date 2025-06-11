import { Component, Input } from '@angular/core';
import { AccessibleInputComponent } from '../../../core/src/lib/input/accessible-input.component';
import { ButtonComponent } from "../../../core/src/lib/button/button.component";
import { TableComponent } from "../../../core/src/lib/table/table.component";
import { SelectComponent } from "../../../core/src/lib/select/select.component";
import { AlertListComponent } from "../../../core/src/lib/alert-list/alert-list.component";
import { WarningAlertListComponent } from "../../../core/src/lib/warning-alert-list/warning-alert-list.component";

@Component({
  selector: 'app-login',
  imports: [ButtonComponent, AccessibleInputComponent, TableComponent, SelectComponent, AlertListComponent, WarningAlertListComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Input() label: string = '';
  @Input() ariaLabel: string = ''; 
  @Input() className: string = ''; 
  headersData = ['Nome', 'Email', 'Phone', 'Status'];
  title = 'teste-framework';
  selectStatus = '';
  menuOptions = ['Perfil', 'Configurações', 'Sair'];
  user: any = { name: '', email: '', phone: '' };
  statusOptions = [
  { label: 'Ativo', value: 'Ativo' },
  { label: 'Inativo', value: 'Inativo' },
  { label: 'Pendente', value: 'Pendente' }
  ];

  alerts: { id: number; text: string; ativo: boolean }[] = [];
  alertsRed: { id: number; text: string; ativo: boolean }[] = [];

  tableData: string[][] = [];

  handleButtonClick() {
    console.log(this.user)
    if(this.user.name != '' && this.user.email != '' && this.user.phone != '' && this.selectStatus != ''){
    const novoItem: string[] = [this.user.name, this.user.email, this.user.phone, this.selectStatus];
    const novoAlerta = {id:this.alerts.length + 1, text:'Novo usuario adicionado', ativo: true}
    this.alerts.push(novoAlerta);
    this.tableData.push(novoItem);
    console.log(this.tableData);
    }
    else{
      const novoAlerta = {id:this.alertsRed.length + 1, text:'Preencha todos os campos', ativo: true}
      console.log(novoAlerta)
      this.alertsRed.push(novoAlerta);
    }
  }

  removeAlert(id: number) {
    const alerta = this.alerts.find(msg => msg.id === id);
    if (alerta) {
      alerta.ativo = false;
    }
  }

  removeAlertRed(id: number) {
    const alerta = this.alertsRed.find(msg => msg.id === id);
    if (alerta) {
      alerta.ativo = false;
    }
  }


}
