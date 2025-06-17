import LoginPage from "../support/LoginPage";


describe('Login test scenarios', () => {
  const login = new LoginPage()
  
  it('Verify successful login', () => {
    //This test assumes valid login credentials are passed
    login.visit('/login')
    login.userEmail(Cypress.env('user_email'))
    login.userPassword(Cypress.env('user_password'))
    login.submit()

    //Assert login success
    cy.url().should('include', '/dashboard') //or whatever the post-login URL is
    cy.contains('Welcome').should('be.visible') //or some other unique element on the dash, etc.
  })

  it('Verify error for missing email and password', () => {
    login.visit('/login')
    login.submit()

    //Assert error messages for missing fields
    cy.contains('Please fill out all fields')
    cy.contains('Please login using your E-mail address')
  })

  it('Verify error for incorrect credentials', () => {
    login.visit('/login')
    login.userBadEmail('NoAuth@test.com')
    login.userBadPassword('123')
    login.submit()

    //Assert error message for failed authentication
    cy.contains('Authentication Failed')
  })

  it('Verify Reset Password', () => {
    //This test assumes valid login email is passed
    login.visit('/login')
    login.forgotPassword()
    login.forgotPasswordEmail(Cypress.env('user_email'))
    login.requestPasswordReset()


    //Assert successful submission message
    cy.contains('Your request has been received. If the E-mail address you entered matches our records password reset instructions will be sent there. Then try logging in again.')
  })

  it('Verify error for missing email on PW reset', () => {
    login.visit('/login')
    login.forgotPassword()
    login.requestPasswordReset()

    //Assert error message for missing email 
    cy.contains('Please provide an E-mail address')
  })
})