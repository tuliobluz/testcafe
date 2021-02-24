import home from '../pages/HomePage';
import { ClientFunction, Selector } from 'testcafe';

const localStorageSet = ClientFunction((key, val) => localStorage.setItem(key, val));
let users = '[{"firstName":"Tulio","lastName":"Luz","username":"testui","password":"test","id":1},{"firstName":"test","lastName":"test","username":"test","password":"test","id":2}]';
let loggedUser = '{"id":1,"username":"testui","firstName":"Tulio","lastName":"Luz","token":"fake-jwt-token"}';
const pageUrl = 'http://localhost:8080/'; 

fixture `Delete`
    .page (pageUrl)
    .beforeEach(async (t) => {
        await localStorageSet('users', users); // Does not get populated on time
        await localStorageSet('user', loggedUser); // Does not get populated on time
        await t.navigateTo(pageUrl);
      })
test('Delete User', async t => {   
    await home.deleteUser();

    await t.expect(Selector('ul > li:nth-child(2)').exists).notOk();
});


