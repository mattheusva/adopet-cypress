# Repositório de Prática - Automação de Testes com Cypress

Este repositório contém os códigos e aprendizados de um curso de automação de testes com Cypress, abordando desde conceitos básicos até técnicas avançadas.

## 📋 Pré-requisitos

Antes de começar, verifique se você possui:

-   Node.js v16+
    
-   npm ou yarn
    
-   Git instalado
    
-   Editor de código (recomendado VS Code)
    

## 🛠️ Configuração Inicial

1.  Clone este repositório

2.  Instale as dependências:
 
	npm install

## ▶️ Como Executar os Testes

**Modo interativo (GUI):**

bash

    npx cypress open

**Modo headless (terminal):**

bash

    npx cypress run

**Gerar relatório mochawesome:**

bash

    npx cypress run --reporter mochawesome
    

## 🌟 Destaques do Projeto

✅ **Principais recursos implementados:**

-   Autenticação via comandos customizados
    
-   Testes com dados dinâmicos (fixtures)
    
-   Mock de APIs com `cy.intercept()`
    
-   Relatórios automatizados com mochawesome
    
-   Integração com Cypress Cloud
    
-   Page Objects para melhor organização
    

## 🔧 Comandos Personalizados

Criamos comandos reutilizáveis em `support/commands.js`:

javascript

    Cypress.Commands.add('login', (email, password) => {
      cy.get('#email').type(email)
      cy.get('#password').type(password)
      cy.get('#loginButton').click()
    })
    
    Cypress.Commands.add('validateToast', (message) => {
      cy.get('.toast').should('contain', message)
    })

## 📊 Cypress Cloud

Para compartilhar resultados na nuvem:

1.  Execute com sua chave de projeto:
    

bash

    npx cypress run --record --key <sua-chave>

2.  Acesse os resultados em:  
    [https://cloud.cypress.io/](https://cloud.cypress.io/)
    

## 📚 Aprendizados do Curso

-   Seletores robustos e boas práticas
    
-   Automação de fluxos complexos
    
-   Criação de dublês de teste (stubs)
    
-   Trabalho com massa de dados externa
    
-   Geração de relatórios profissionais
    
-   Comandos customizados para reuso
    

## 🔗 Links Úteis

-   [Documentação do Cypress](https://docs.cypress.io)
    
-   [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)
    
-   [Mochawesome Reporter](https://github.com/adamgruber/mochawesome)
    
-   [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro)
