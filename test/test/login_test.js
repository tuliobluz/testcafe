import login from '../pages/LoginPage';
import config from '../config.json';

import { ClientFunction } from 'testcafe';

const testData = require('../helpers/testData');

const pageUrl = `${config.baseUrl}login`;
const localStorageSet = ClientFunction((key, val) => localStorage.setItem(key, val));

fixture `Login`
  .page (pageUrl)
  .beforeEach(async (t) => {
    await localStorageSet('users', testData.variables.users);
    await t.navigateTo(pageUrl);
  });

test('Successful Login', async t => {  
  await login.typeUserName('testui');
  await login.typePassword('test');
  await login.submitLogin();

  await t.expect(login.loginSuccessfulMsg.innerText).eql("You're logged in with React!!");
});

test('Required Fields Login', async t => {
  await login.submitLogin();

  await t.expect(login.userNameRequired.innerText).eql("Username is required");
  await t.expect(login.passwordRequired.innerText).eql("Password is required");
});
