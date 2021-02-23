import {t, Selector } from 'testcafe';

class RegistrationPage {
    // constructor () {
    //     this.nameInput               = Selector('input').withAttribute('data-testid', 'name-input');
    //     this.importantFeaturesLabels = Selector('legend').withExactText('Which features are important to you:').parent().child('p').child('label');
    //     this.submitButton            = Selector('button').withAttribute('data-testid', 'submit-button');
    // }

    // async selectFeature(number) {
    //     await t.click(this.importantFeaturesLabels.nth(number));
    // }

    // async clickSubmit() {
    //     await t.click(this.submitButton);
    // }

    // async typeName(name) {
    //     await t.typeText(this.nameInput, name);
    // }

    constructor () {
        this.firstNameInput = Selector('input[name=firstName]');
        this.lastNameInput = Selector('input[name=lastName]');
        this.usernameInput = Selector('input[name=username]');
        this.passwordInput = Selector('input[name=password]');
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

}

export default new RegistrationPage();