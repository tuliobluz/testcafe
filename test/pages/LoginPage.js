import {t, Selector } from 'testcafe';

class RegistrationPage {
  constructor () {
      this.userNameInput = Selector('input[name=username]');
      this.passwordInput = Selector('input[name=password]');
      this.submitButton = Selector('.btn-primary');
      this.userNameRequired = Selector('input[name=username]').sibling(-1);
      this.passwordRequired = Selector('input[name=password').sibling(-1);
      this.loginSuccessfulMsg = Selector('.col-md-offset-3 > p:nth-child(2)')
  }

  async typeUserName(userName) {
      await t.typeText(this.userNameInput, userName);
  }

  async typePassword(password) {
      await t.typeText(this.passwordInput, password);
  }

  async submitLogin() {
      await t.click(this.submitButton);
  }
}

export default new RegistrationPage();
