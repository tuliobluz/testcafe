import login from '../pages/LoginPage';
import { ClientFunction } from 'testcafe';

const localStorageSet = ClientFunction((key, val) => localStorage.setItem(key, val));
let users = '[{"firstName":"Tulio","lastName":"Luz","username":"testui","password":"test","id":1}]';
const pageUrl = 'http://localhost:8080/login'; 

fixture `Login`
    .page (pageUrl)
    .beforeEach(async (t) => {
        await localStorageSet('users', users); // Does not get populated on time
        await t.navigateTo(pageUrl);
      })

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

