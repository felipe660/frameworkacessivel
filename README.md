#Requisitos

-Node.js
-Angular 19+

#Como baixar o projeto:

Usar o repositorio publicado no ava ou baixar pelo git:
git clone https://github.com/milanitech/frameworkacessivel.git

#Conteúdo dos arquivos

Dentro da pasta Projects existe o diretório core, referente a biblioteca criada, e o diretório demo, 
que se trata da pagina referente a documentação e exemplos de uso da biblioteca.

#Como startar o projeto

Na pasta /frameworkacessivel abra o terminal e digite:
Npm install

Em seguida starte o server:
ng serve

Isso vai subir a pagina web referente a pasta demo que está utilizando a biblioteca da pasta core para representar os exemplos.
Essa foi a maneira encontrada para teste e também documentação, visto que nao tem como rodar a biblioteca isoladamente sem um projeto 
angular referente a uma pagina web que consome os componentes da biblioteca.
Para visualizar a pagina de documentação e exemplos dos componentes basta acessar:
localhost:4200 ou https://milanitech.github.io/frameworkacessivel/

#Disponivel no NPM

É possível importar a biblioteca neste ou em qualquer projeto angular já startado,
basta digitar no terminal:

npm i framework-acessivel

No caso desse projeto disponibilizei para os avaliadores no formato que a biblioteca foi criada, pois nesse formato é possível ver todo o html, css e ts.
Porém se necessário basta importar o framework via npm (npm i framework-acessivel) como dito anteriormente e passar a importar direto do node_modules 
como uma biblioteca convencional ao inves de usar a pasta core como no desenvolvimento.
Para fazer isso, em projects/demo/src/app altere os imports no arquivo app.component.ts, 
exemplo:

import { ButtonComponent } from "../../../core/src/lib/button/button.component";

para 

import { ButtonComponent} from 'framework-acessivel';

ou simplismente altere todos os imports para:
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from 'framework-acessivel';
import { TableComponent } from 'framework-acessivel';
import { SelectComponent } from 'framework-acessivel';
import { AlertListComponent } from 'framework-acessivel';
import { CollapseComponent } from 'framework-acessivel';
import { DropdownComponent } from 'framework-acessivel';
import { ResponsiveImageComponent } from 'framework-acessivel';
import { AccessibleInputComponent } from 'framework-acessivel';
import { ButtonComponent } from 'framework-acessivel';

a partir de então você passará a consumir os componentes diretamente da blibliotecca instalada anteriormente.

#Como importar e usar componentes
É possível ver como instalar e importar os componentes em: https://www.npmjs.com/package/framework-acessivel
Para usar novos componentes no html será necessário verificar a documentação no localhost:4200 ou no https://milanitech.github.io/frameworkacessivel/