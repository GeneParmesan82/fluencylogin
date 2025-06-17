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
    cy.get(':nth-child(5) > .p-button').click()
  }

  forgotPasswordEmail(email) {
    cy.get('#__BVID__52').type(email)
  }

  requestPasswordReset() {
    
  }
}

export default LoginPage;

