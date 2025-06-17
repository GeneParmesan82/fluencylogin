// cypress/pages/LoginPage.js

class LoginPage {
  visit() {
    cy.visit('/login');
  }

  userEmail() {
    cy.get('input[name="username"]').type(Cypress.env('user_email'));
  }

  userPassword() {
    cy.get('input[id="password"]').type(Cypress.env('user_password'));
  }

  userBadEmail(email) {
    cy.get('input[name="username"]').type(email);
  }

  userBadPassword(password) {
    cy.get('input[id="password"]').type(password)
  }

  submit() {
    cy.get('button.login-button').click();
  }

  forgotPassword() {
    cy.get('.text-center > .p-button').click()
  }

  forgotPasswordEmail() {
    cy.get('input[placeholder="email"]').type(Cypress.env('user_email'))
  }

  requestPasswordReset() {
    cy.get(':nth-child(3) > .p-button').click()
  }
}

export default LoginPage;

