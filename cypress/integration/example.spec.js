it('works', () => {
  cy.visit('/')
  cy.get('.postlist li')
    .should('be.visible')
    .should('have.length', 3)
})
