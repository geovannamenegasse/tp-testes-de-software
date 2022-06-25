describe('Testes end-to-end', () => {

  it('Somar dois números', () => {
   
    cy.visit('http://localhost:3000/soma')

    cy.get('[name="num1"]')
    .type('5')
    .should('have.value', '5')

    cy.get('[name="num2"]')
    .type('10')
    .should('have.value', '10')
    
    cy.contains('=').click()

    cy.get('[name="result"]').contains('15')

    cy.wait(10000)

  });

  it('Multiplicar dois números', () => {
   
    cy.visit('http://localhost:3000/multiplicacao')

    cy.get('[name="num1"]')
    .type('5')
    .should('have.value', '5')

    cy.get('[name="num2"]')
    .type('10')
    .should('have.value', '10')
    
    cy.contains('=').click()

    cy.get('[name="result"]').contains('50')

    cy.wait(10000)
    
  });

})