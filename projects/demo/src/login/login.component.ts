import { Component, Input } from '@angular/core';
import { AccessibleInputComponent } from '../../../core/src/lib/input/accessible-input.component';
import { ButtonComponent } from "../../../core/src/lib/button/button.component";
import { TableComponent } from "../../../core/src/lib/table/table.component";
import { SelectComponent } from "../../../core/src/lib/select/select.component";
import { AlertListComponent } from "../../../core/src/lib/alert-list/alert-list.component";

@Component({
  selector: 'app-login',
  imports: [ButtonComponent, AccessibleInputComponent, TableComponent, SelectComponent, AlertListComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Input() label: string = '';
  @Input() ariaLabel: string = ''; 
  @Input() className: string = ''; 
  headersData = ['Nome', 'Email', 'Phone', 'Status'];
  title = 'teste-framework';
  selectStatus = 'ativo';
  menuOptions = ['Perfil', 'Configurações', 'Sair'];
  user: any = { name: '', email: '', phone: '' };
  statusOptions = [
  { label: 'Ativo', value: 'ativo' },
  { label: 'Inativo', value: 'inativo' },
  { label: 'Pendente', value: 'pendente' }
  ];

  alerts: { id: number; text: string; ativo: boolean }[] = [];
  alertsRed: { id: number; text: string; ativo: boolean }[] = [];

  tableData: string[][] = [];

  handleButtonClick() {
    console.log(this.user)
    if(this.user.name != '' && this.user.email != '' && this.user.phone != ''){
    const novoItem: string[] = [this.user.name, this.user.email, this.user.phone, this.selectStatus];
    const novoAlerta = {id:this.alerts.length + 1, text:'Novo usuario adicionado', ativo: true}
    this.alerts.push(novoAlerta);
    this.tableData.push(novoItem);
    console.log(this.tableData);
    }
    else{
      const novoAlerta = {id:this.alerts.length + 1, text:'Preencha todos os campos', ativo: true}
      console.log(novoAlerta)
      this.alerts.push(novoAlerta);
    }
  }

  removeAlert(id: number) {
    const alerta = this.alerts.find(msg => msg.id === id);
    if (alerta) {
      alerta.ativo = false;
    }
  }


}
