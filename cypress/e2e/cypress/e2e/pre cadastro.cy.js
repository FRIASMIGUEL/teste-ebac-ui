/// <reference types="cypress"/>

var faker = require('faker');

describe('Funcionalidade Pre Cadastro', () =>{

    beforeEach(() => {cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
        
    });


    afterEach(() => { cy.screenshot()  
        
    });
     
    it('Deve completar o pre cadastro com sucesso', () =>{
let nomeFaker = faker.name.firstName()
let sobrenomeFaker = faker.name.lastName()
let emailFaker = faker.internet.email(nomeFaker)

        cy.get('.register > :nth-child(1) > label').type(emailFaker)       
        cy.get('#reg_password').type('ebac@teste$3456')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso')

        });

});