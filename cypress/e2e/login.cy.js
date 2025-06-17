import LoginPage from "../support/LoginPage";

describe('Login Tests', () => {
  const login = new LoginPage();
  
  it('Valid Login', () => {
    login.visit('/login')
    login.fillUsername('Tester')
    login.fillPassword('123')
    login.submit()    
  })
})