/// <reference types="cypress"/>

const perfil =require('../e2e/fixtures/perfil.json')

context('Funcionalidade Login', () =>{

    beforeEach(() => {cy.visit('minha-conta')
        
    });
    
    
    afterEach(() => { cy.screenshot()  
        
    });
    
    
   
    it('Deve fazer login com sucesso', () =>{
    
    cy.get('.woocommerce-form > :nth-child(1) > label').type('aluno_ebac@teste.com')
    cy.get('#password'). type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.page-title').should('contain', 'Minha conta')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
    })

    it('Deve fazer login com sucesso - Usando arquivo de dados', () =>{
    
        cy.get('.woocommerce-form > :nth-child(1) > label').type(perfil.usuario)
        cy.get('#password'). type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
        });

        it.only('Deve fazer login com sucesso - Usando fixture', () =>{
    
        cy.fixture('perfil').then(dados => { 

        cy.get('.woocommerce-form > :nth-child(1) > label').type(dados.usuario)
        cy.get('#password'). type(dados.senha, {log: false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')

    })
        });
    
    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () =>{
       
        cy.get('.woocommerce-form > :nth-child(1) > label').type('@teste.com')
        cy.get('#password'). type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','Erro: o usuário @teste.com não está cadastrado neste site')
    
    })
    
    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () =>{
        
        cy.get('.woocommerce-form > :nth-child(1) > label').type('aluno_ebac@teste.com')
        cy.get('#password'). type('teste@teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail') 
    })
    
    
    })