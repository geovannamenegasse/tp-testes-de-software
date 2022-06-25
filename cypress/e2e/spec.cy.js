describe('Testes end-to-end', () => {

  it('Somar dois números', () => {
   
    cy.visit('http://localhost:3000/soma')

    cy.get('[name="num1"]')
    .type('5')
    .should('have.value', '5')
    cy.wait(2000)

    cy.get('[name="num2"]')
    .type('10')
    .should('have.value', '10')
    cy.wait(2000)
    
    cy.contains('=').click()

    cy.get('[name="result"]').contains('15')

    cy.wait(2000)

  });

  it('Multiplicar dois números', () => {
   
    cy.visit('http://localhost:3000/multiplicacao')

    cy.get('[name="num1"]')
    .type('5')
    .should('have.value', '5')
    cy.wait(2000)

    cy.get('[name="num2"]')
    .type('10')
    .should('have.value', '10')
    cy.wait(2000)
    
    cy.contains('=').click()

    cy.get('[name="result"]').contains('50')

    cy.wait(2000)
    
  });

  it('Dividir dois números', () => {
   
    cy.visit('http://localhost:3000/divisao')

    cy.get('[name="num1"]')
    .type('5')
    .should('have.value', '5')
    cy.wait(2000)

    cy.get('[name="num2"]')
    .type('2')
    .should('have.value', '2')
    cy.wait(2000)
    
    cy.contains('=').click()

    cy.get('[name="result"]').should('contain', '2.5')

    cy.wait(2000)
    
  });

  it('Subtrair dois números', () => {
   
    cy.visit('http://localhost:3000/subtracao')

    cy.get('[name="num1"]')
    .type('5')
    .should('have.value', '5')
    cy.wait(2000)

    cy.get('[name="num2"]')
    .type('10')
    .should('have.value', '10')
    cy.wait(2000)
    
    cy.contains('=').click()

    cy.get('[name="result"]').should('contain', '-5')

    cy.wait(2000)
    
  });

  it('Raiz quadrada', () => {
   
    cy.visit('http://localhost:3000/raizquadrada')

    cy.get('[name="num1"]')
    .type('9')
    .should('have.value', '9')
    cy.wait(2000)

    cy.contains('=').click()

    cy.get('[name="result"]').should('contain', '3')

    cy.wait(2000)
    
  });

})