describe('UI Test Automation Playground', () => {
    it('Deve clicar no botão "Gravar" sem usar o atributo ID', () => {
        cy.visit('/dynamicid')

        cy.contains('button', 'Button with Dynamic ID')
          .should('be.visible')
          .click()
          .should('have.text', 'Button with Dynamic ID')
    })
})