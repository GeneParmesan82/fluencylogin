// cypress/pages/LoginPage.js

class LoginPage {

  email = Cypress.env('user_email')
  password = Cypress.env('user_password')


  visit() {
    cy.visit('/login');
  }

  userEmail() {
    cy.get('input[name=username]').type(email);
  }

  userPassword() {
    cy.get('input[id=password]').type(password);
  }

  userBadEmail(badEmail) {
    cy.get('input[name="username"]').type(badEmail);
  }

  userBadPassword(badPassword) {
    cy.get('input[id="password"]').type(badPassword)
  }

  submit() {
    cy.get('button.login-button').click();
  }

  forgotPassword() {
    cy.get('.text-center > .p-button').click()
  }

  forgotPasswordEmail() {
    cy.get('input[placeholder="email"]').type(email)
  }

  requestPasswordReset() {
    cy.get(':nth-child(3) > .p-button').click()
  }
}

export default LoginPage;

