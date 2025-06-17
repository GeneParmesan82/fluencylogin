// cypress/pages/LoginPage.js

class LoginPage {
  visit() {
    cy.visit('/login');
  }

  fillUsername(username) {
    cy.get('#username').type(username);
  }

  fillPassword(password) {
    cy.get('.p-password-input').type(password);
  }

  submit() {
    cy.get('button.login-button').click();
  }
}

export default LoginPage;

