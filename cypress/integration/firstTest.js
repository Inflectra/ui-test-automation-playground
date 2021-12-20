describe('My First Test', () => {
  it('Visits the UI Test Automation Playground page', () => {
    cy.visit('https://www.uitestingplayground.com/')

    cy.contains('Text Input').click()
    cy.url().should('include', 'textinput')
    
    cy.get('.form-control')
      .type('This has already been clicked')
    cy.get('.btn-primary').click()  
    cy.contains('This has already been clicked')
  })
})