describe('User can log in', () => {
  it('successfully', () => {
    cy.visit('http://localhost:3001');
    cy.get('#login').click();
    cy.get('#login-form').within(() => {
      cy.get('#email').type('john@doe.com')
      cy.get('#password').type('password')
      cy.get('button').click()
    })
    cy.contains('Hi john@doe.com')
  })

  it('with invalid credentials', () => {
    cy.visit('http://localhost:3001');
    cy.get('#login').click();
    cy.get('#login-form').within(() => {
      cy.get('#email').type('john@doe.com')
      cy.get('#password').type('wrong_password')
      cy.get('button').click()
    })
    cy.contains('Invalid login credentials. Please try again.')
  })
})