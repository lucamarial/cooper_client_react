describe('User can sign up', () => {
  it('successfully', () => {
    cy.visit('http://localhost:3001');
    cy.server();
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/auth',
      status: "200",
      response: 'fixture:login.json',
      headers: {
        "uid": "john@doe.com"
      }
    })
    cy.get('#signup').click();
    cy.get('#login-form').within(() => {
      cy.get('#email').type('john@doe.com')
      cy.get('#password').type('password')
      cy.get('#password_confirmation').type('password')
      cy.get('button').click()
    })
    cy.contains('Hi john@doe.com')
  })

  it('with invalid credentials', () => {
    cy.visit('http://localhost:3001');
    cy.server();
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/auth',
      status: "422",
      response: {
        "errors": [
          "doesn't match Password"
        ],
        "success": false
      }
    })
    cy.get('#signup').click();
    cy.get('#login-form').within(() => {
      cy.get('#email').type('john@doe.com')
      cy.get('#password').type('password')
      cy.get('#password_confirmation').type('wrong_password')
      cy.get('button').click()
    })
    cy.contains("doesn't match Password")
  })
})