
# framework-acessivel

**Framework Acessível para Desenvolvimento de Aplicações Web com Angular**  
Conjunto de componentes reutilizáveis que seguem as diretrizes de acessibilidade **WCAG 2.2**, facilitando a criação de interfaces inclusivas e acessíveis.

---

## ✨ Funcionalidades

- ✅ Componentes com suporte a teclado e leitores de tela
- ✅ Padrões de design acessível
- ✅ Compatível com Angular 19+
- ✅ Fácil de integrar e estender
- ✅ Documentação clara e exemplos práticos

---

## 🚀 Instalação

```bash
npm install framework-acessivel
```

---

## 🛠️ Como usar

Importe o componente desejado no seu `AppComponent` ou no módulo desejado:

```typescript
import { ButtonComponent } from 'framework-acessivel';

@NgModule({
  imports: [
    ButtonComponent
  ],
})
export class AppComponent { }
```

Utilize os componentes diretamente no seu HTML:

```html
<accessible-button
    className="btn-azul"
    label="Clique Aqui"
    ariaLabel="Botão de Clique"
    (onClick)="handleButtonClick()">
</accessible-button>
```
---

## 📚 Documentação

[https://milanitech.github.io/frameworkacessivel/](https://milanitech.github.io/frameworkacessivel/)

---

## 💡 Motivação

Este framework nasceu da necessidade de simplificar o desenvolvimento de aplicações acessíveis, democratizando o acesso a componentes que seguem as boas práticas definidas pelas diretrizes WCAG e normas de Acessibilidade Web.

---

## ✅ Requisitos

- Angular ^19.0.0
- TypeScript >=5.0

---

## 🤝 Contribuindo

Contribuições são muito bem-vindas!

1. Crie sua feature branch:  
   `git checkout -b feature/nova-feature`
2. Commit suas alterações:  
   `git commit -m 'feat: adicionado novo componente'`
3. Push:  
   `git push origin feature/nova-feature`
4. Abra um Pull Request

---

## 🖥️ Desenvolvido por

**Felipe Milani**  
Desenvolvimento de frameworks web.

---

## 📫 Contato

- Email: felipe.s.milani@gmail.com
