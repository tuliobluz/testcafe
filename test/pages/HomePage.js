import {t, Selector } from 'testcafe';

class RegistrationPage {
    constructor () {
        this.deleteUserButton = Selector('ul > li:nth-child(2)');
        this.userDeleted = Selector('ul > li:nth-child(2)');
    }

    async deleteUser() {
        await t.click(this.deleteUserButton);
    }
}

export default new RegistrationPage();

