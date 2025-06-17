// cypress/pages/LoginPage.js

class LoginPage {
  visit() {
    cy.visit('/login');
  }

  userEmail() {
    cy.get('#username').type(Cypress.env('user_email'));
  }

  userPassword() {
    cy.get('.p-password-input').type(Cypress.env('user_password'));
  }

  userBadEmail(email) {
    cy.get('#username').type(email);
  }

  userBadPassword(password) {
    cy.get('.p-password-input').type(password)
  }

  submit() {
    cy.get('button.login-button').click();
  }

  forgotPassword() {
    cy.get('.text-center > .p-button').click()
  }

  forgotPasswordEmail() {
    cy.get('#__BVID__32').type(Cypress.env('user_email'))
  }

  requestPasswordReset() {
    cy.get(':nth-child(3) > .p-button').click()
  }
}

export default LoginPage;

