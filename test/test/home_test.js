import home from '../pages/HomePage';
import config from '../config.json';

import { ClientFunction, Selector } from 'testcafe';

const testData = require('../helpers/testData');

const pageUrl = `${config.baseUrl}`;
const localStorageSet = ClientFunction((key, val) => localStorage.setItem(key, val));

fixture `Delete`
  .page (pageUrl)
  .beforeEach(async (t) => {
      await localStorageSet('users', testData.variables.users);
      await localStorageSet('user', testData.variables.loggedUser);
      await t.navigateTo(pageUrl);
  });

test('Delete User', async t => {   
  await home.deleteUser();

  await t.expect(Selector('ul > li:nth-child(2)').exists).notOk('Element not deleted');
});

test('Logout', async t => {   
  await home.clickLogout();

  const getPageUrl = ClientFunction(() => window.location.href);

  await t.expect(getPageUrl()).contains('/login');
});
