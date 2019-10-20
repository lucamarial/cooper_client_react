describe('User can sign up', () => {
  it('successfully', () => {
    cy.visit('http://localhost:3001');
    cy.server();
    cy.route({
      method: 'POST',
      url: 'https://cooperdl.herokuapp.com/api/v1/auth/sign_up',
      status: "200",
      response: {
        "status": [
          "success"
        ],
        "success": true
      },
      headers: {
        "uid": "john@doe.com"
      }
    })
    cy.get('#signup').click();
    cy.get('#login-form').within(() => {
      cy.get('#email').type('john@doe.com')
      cy.get('#password').type('password')
      cy.get('#password-confirmation').type('password')
      cy.get('button').click()
    })
    cy.contains('Hi john@doe.com')
  })

  it('with invalid credentials', () => {
    cy.visit('http://localhost:3001');
    cy.server();
    cy.route({
      method: 'POST',
      url: 'https://cooperdl.herokuapp.com/api/v1/auth/sign_up',
      status: "422",
      response: {
        "errors": [
          "password_confirmation"
        ],
        "success": false
      }
    })
    cy.get('#signup').click();
    cy.get('#login-form').within(() => {
      cy.get('#email').type('john@doe.com')
      cy.get('#password').type('password')
      cy.get('#password-confirmation').type('wrong_password')
      cy.get('button').click()
    })
    cy.contains("doesn't match Password")
  })
})