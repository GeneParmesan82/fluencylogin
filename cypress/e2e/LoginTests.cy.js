import LoginPage from '../support/LoginPage';

describe('Login test scenarios', () => {
  const login = new LoginPage();

  it('Verify successful login', () => {
    login.visit();
    login.userEmail(); // uses Cypress.env internally
    login.userPassword();  // uses Cypress.env internally
    login.submit();

    // Assert login success
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome').should('be.visible');
  });

  it('Verify error for missing email and password', () => {
    login.visit();
    login.submit();

    // Assert error messages for missing fields
    cy.contains('Please fill out all fields').should('be.visible');
    cy.contains('Please login using your E-mail address').should('be.visible');
  });

  it('Verify error for incorrect credentials/no auth', () => {
    login.visit();
    login.userEmail('NoAuth@test.com');
    login.userPassword('123');
    login.submit();

    // Assert error message for failed authentication
    cy.contains('Authentication Failed').should('be.visible');
  });

  it('Verify successful Reset Password submission.', () => {
    login.visit();
    login.forgotPassword();
    login.forgotPasswordEmail(); // uses Cypress.env internally
    login.requestPasswordReset();

    // Assert successful submission message
    cy.contains('Your request has been received.').should('be.visible');
  });

  it('Verify error when clicking Reset Password without an email', () => {
    login.visit();
    login.forgotPassword();
    login.requestPasswordReset();

    // Assert error message for missing email
    cy.contains('Please provide an E-mail address').should('be.visible');
  });
});
