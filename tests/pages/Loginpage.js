class Loginpage {
  get email() { return $('~emailInput'); }
  get password() { return $('~passwordInput'); }
  get loginBtn() { return $('~loginButton'); }
  get errorMsg() { return $('~errorMessage'); }

  async enterEmail(value) {
    await this.email.setValue(value);
  }

  async enterPassword(value) {
    await this.password.setValue(value);
  }

  async tapLogin() {
    await this.loginBtn.click();
  }

  async getErrorMessage() {
    return await this.errorMsg.getText();
  }
}

module.exports = new LoginPage();
