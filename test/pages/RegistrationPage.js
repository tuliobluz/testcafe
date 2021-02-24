import {t, Selector } from 'testcafe';

class RegistrationPage {
  constructor () {
      this.firstNameInput = Selector('input[name=firstName]');
      this.lastNameInput = Selector('input[name=lastName]');
      this.usernameInput = Selector('input[name=username]');
      this.passwordInput = Selector('input[name=password]');
      this.registerSuccessfulMsg = Selector('.alert-success');
      this.submitButton = Selector('.btn-primary');
      this.firstNameRequired = Selector('input[name=firstName]').sibling(-1);
      this.lastNameRequired = Selector('input[name=lastName]').sibling(-1);
      this.userNameRequired = Selector('input[name=username]').sibling(-1);
      this.passwordRequired = Selector('input[name=password').sibling(-1);
  }

  async typeFirstName(firstName) {
      await t.typeText(this.firstNameInput, firstName);
  }

  async typeLastName(lastName) {
      await t.typeText(this.lastNameInput, lastName);
  }

  async typeUserName(username) {
      await t.typeText(this.usernameInput, username);
  }

  async typePassword(password) {
      await t.typeText(this.passwordInput, password);
  }

  async submitRegistration() {
      await t.click(this.submitButton);
  }
}

export default new RegistrationPage();
