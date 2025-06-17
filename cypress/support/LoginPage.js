// cypress/pages/LoginPage.js

class LoginPage {

   
  visit() {
    cy.visit('/login');
  }

  userEmail() {
    cy.get('#username').type(Cypress.env('user_email'));
  }

  userPassword() {
    cy.get('#password').type(Cypress.env('user_password'));
  }

  userBadEmail(badEmail) {
    cy.get('#username').type(badEmail);
  }

  userBadPassword(badPassword) {
    cy.get('#password').type(badPassword)
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

