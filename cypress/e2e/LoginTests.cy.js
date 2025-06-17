import LoginPage from "../support/LoginPage";

describe('Login test scenarios', () => {
  const login = new LoginPage()
  
  it('Verify successful login', () => {
    //This test assumes valid login credentials are passed
    login.visit('/login')
    login.userEmail('Tester@fluency.com')
    login.userPassword('ValidPassword123')
    login.submit()

    //Assert login success
    cy.url().should('include', '/dashboard') //or whatever the post-login URL is
    cy.contains('Welcome').should('be.visible') //or some other unique element on the dash, etc.
  })

  it('Verify error for missing email/password', () => {
    login.visit('/login')
    login.submit()

    //Assert error messages for missing fields
    cy.contains('Please fill out all fields')
    cy.contains('Please login using your E-mail address')
  })

  it('Verify error for incorrect credentials', () => {
    login.visit('/login')
    login.userEmail('NoAuth@test.com')
    login.userPassword('123')
    login.submit()

    //Assert error message for failed authentication
    cy.contains('Authentication Failed')
  })

  it.only('Verify Reset Password', () => {
    //This test assumes valid login email is passed
    login.visit('/login')
    login.forgotPassword()
    login.forgotPasswordEmail('Tester@fluency.com')
    login.requestPasswordReset()


    //Assert successful submission message
    
  })
})