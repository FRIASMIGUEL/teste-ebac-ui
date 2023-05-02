///  <reference types="cypress" />

describe('Funcionalidade Pagina de Produtos', () => {

before(() => {

    cy.visit('produtos')


});

it('Deve selecionao um produto da lista', ()  => {
    cy.get('[class="product-block grid"]')
    //.first()
    //.last()
    //.eq(3)
    .contains('Atlas Fitness Tank')
    .click()

});
it('deve adicionar um produto ao carrinho', () => {

var quantidade = 3
cy.get('[class="product-block grid"]')
.contains('Atlas Fitness Tank').click()
cy.get('.button-variable-item-XL').click()
cy.get('.button-variable-item-Blue').click()
cy.get('.input-text').clear().type(quantidade)
cy.get('.single_add_to_cart_button').click()
cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
cy.get('.woocommerce-message').should('contain', quantidade + ' × “Atlas Fitness Tank” foram adicionados no seu carrinho.')

});    
  
it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
cy.addProdutos('Atlas Fitness Tank', 'M', 'Blue',  2 )

});

it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {

    cy.visit('produtos')

    cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Black', 3 )


});
  });
