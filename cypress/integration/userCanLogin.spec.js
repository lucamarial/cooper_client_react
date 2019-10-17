describe('User can log in', () => {
  it('successfully', () => {
    cy.visit('http://localhost:3001');
    cy.get('#login').click();
    cy.get('#login-form').within(() => {
      cy.get('#email').type('user@mail.com')
      cy.egt('#password').type('password')
      cy.get('button').click()
    })
    cy.contains('Hi user@mail.com')
  })

  it('with invalid credentials', () => {
    cy.visit('http://localhost:3001');
    cy.get('#login').click();
    cy.get('#login-form').with(() => {
      cy.get('#email').type('user@mail.com')
      cy.get('#password').type('wrongpassword')
      cy.get('button').click()
    })
    cy.contains('Invalid login credentials. Please try again.')
  })
})