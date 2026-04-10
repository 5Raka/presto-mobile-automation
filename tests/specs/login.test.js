const Loginpage = require('../pages/LoginPage');

describe('Login Test', () => {
  it('should show error on invalid login', async () => {
    await LoginPage.enterEmail('wrong@test.com');
    await LoginPage.enterPassword('123456');
    await LoginPage.tapLogin();

    const error = await LoginPage.getErrorMessage();
    console.log(error);
  });
});
