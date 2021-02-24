import {t, Selector } from 'testcafe';

class RegistrationPage {
    constructor () {
        this.deleteUserButton = Selector('li:nth-child(2) > span');
        this.userDeleted = Selector('ul > li:nth-child(2)');
        this.logout = Selector('a[href="/login"]')
    }

    async deleteUser() {
        await t.click(this.deleteUserButton);
    }

    async clickLogout() {
        await t.click(this.logout);
    }
}

export default new RegistrationPage();
