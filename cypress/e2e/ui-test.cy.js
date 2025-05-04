describe('UI Test Automation Playground', () => {
    it('Deve clicar no botão "Gravar" sem usar o atributo ID', () => {
        cy.visit('/dynamicid')

        cy.contains('button', 'Button with Dynamic ID')
            .should('be.visible')
            .click()
            .should('have.text', 'Button with Dynamic ID')
    })

    it.only('Deve identificar o botão primário com a classe btn-primary e confirmar o alerta', () => {
        cy.visit('/classattr')

        cy.on('window:alert', cy.stub().as('alert'))
        cy.get('.btn-primary').click()
        cy.get('@alert').should('have.been.calledWith', 'Primary button pressed')
    })
})