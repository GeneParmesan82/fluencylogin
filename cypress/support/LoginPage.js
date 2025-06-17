// cypress/pages/LoginPage.js

class LoginPage {

  email = Cypress.env('user_email')
  password = Cypress.env('user_password')


  visit() {
    cy.visit('/login');
  }

  userEmail() {
    cy.get('#username').type(email);
  }

  userPassword() {
    cy.get('#password').type(password);
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
    cy.get('#__BVID__70').type(email)
  }

  requestPasswordReset() {
    cy.get(':nth-child(3) > .p-button').click()
  }
}

export default LoginPage;

