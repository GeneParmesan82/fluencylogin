// cypress/pages/LoginPage.js

class LoginPage {
  visit() {
    cy.visit('/login');
  }

  userEmail(email) {
    cy.get('#username').type(email);
  }

  userPassword(password) {
    cy.get('.p-password-input').type(password);
  }

  submit() {
    cy.get('button.login-button').click();
  }

  forgotPassword() {
    cy.get('.text-center > .p-button').click()
  }

  forgotPasswordEmail(email) {
    cy.get('#__BVID__32').type(email)
  }

  requestPasswordReset() {
    cy.get(':nth-child(3) > .p-button').click()
  }
}

export default LoginPage;

