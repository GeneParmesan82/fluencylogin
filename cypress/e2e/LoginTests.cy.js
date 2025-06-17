import LoginPage from '../support/LoginPage';

describe('Login test scenarios', () => {
  const login = new LoginPage();

  it('Verify successful login', () => {
    login.visit();
    login.userEmail(); // uses Cypress.env internally
    login.userPassword();
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

  it('Verify error for incorrect credentials', () => {
    login.visit();
    login.userBadEmail('NoAuth@test.com');
    login.userBadPassword('123');
    login.submit();

    // Assert error message for failed authentication
    cy.contains('Authentication Failed').should('be.visible');
  });

  it('Verify Reset Password', () => {
    login.visit();
    login.forgotPassword();
    login.forgotPasswordEmail(); // uses Cypress.env internally
    login.requestPasswordReset();

    // Assert successful submission message
    cy.contains('Your request has been received.').should('be.visible');
  });

  it('Verify error for missing email on PW reset', () => {
    login.visit();
    login.forgotPassword();
    login.requestPasswordReset();

    // Assert error message for missing email
    cy.contains('Please provide an E-mail address').should('be.visible');
  });
});
