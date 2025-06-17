// cypress/pages/LoginPage.js

class LoginPage {
  visit() {
    cy.visit('/login');
  }

  userEmail(email = Cypress.env('user_email')) {
    cy.get('#username').clear().type(email);
  }

  userPassword(password = Cypress.env('user_password')) {
    cy.get('#password').clear().type(password);
  }

  submit() {
    cy.get('button.login-button').click();
  }

  forgotPassword() {
    cy.get('.text-center > .p-button').click();
  }

  forgotPasswordEmail(email = Cypress.env('user_email')) {
    cy.get('#__BVID__32').clear().type(email);
  }

  requestPasswordReset() {
    cy.get(':nth-child(3) > .p-button').click();
  }
}

export default LoginPage;
