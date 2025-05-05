describe('UI Test', () => {
  it('Deve clicar no botão sem usar o ID dinâmico', () => {
    cy.visit('/dynamicid')

    cy.contains('button', 'Button with Dynamic ID')
      .should('be.visible')
      .click()
      .should('have.text', 'Button with Dynamic ID')
  })

  it('Deve exibir alerta ao clicar no botão primário', () => {
    cy.visit('/classattr')

    cy.on('window:alert', cy.stub().as('alert'))
    cy.get('.btn-primary').click()
    cy.get('@alert')
      .should('have.been.calledWith', 'Primary button pressed')
  })

  it('Deve impedir clique duplo no botão verde', () => {
    cy.visit('/hiddenlayers')

    cy.get('#greenButton').click()
    cy.get('#greenButton').click({ force: true })


    cy.get('#blueButton')
      .should('exist')
      .and('have.length', 1)

  })

  it('Deve navegar até "Load Delay" e clicar no botão após o carregamento', () => {
    cy.visit('/')
    cy.contains('a', 'Load Delay')
      .click()
    cy.contains('button', 'Button Appearing After Delay')
      .should('be.visible')
      .click()
  })

  it('Deve aguardar o carregamento do texto via AJAX', () => {
    cy.visit('/ajax')

    cy.contains('button', 'Button Triggering AJAX Request')
      .click()
    cy.contains('Data loaded with AJAX get request.', { timeout: 20000 })
      .should('be.visible')
  })

  it.only('Deve aguardar o texto do rótulo aparecer após o processamento no lado do cliente', () => {
    cy.visit('/clientdelay')

    cy.contains('button', 'Button Triggering Client Side Logic')
      .click()
    cy.contains('Data calculated on the client side.', {timeout: 15000})
      .should('be.visible')
  })

})