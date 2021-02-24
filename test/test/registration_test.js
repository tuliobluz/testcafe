import registration from '../pages/RegistrationPage';
import config from '../config.json';

import Faker from 'Faker';
import { ClientFunction } from 'testcafe';

const randomName = Faker.Name.firstName()
const randomLast = Faker.Name.lastName()
const username = Faker.Internet.userName()
const password = randomName + '123!';

const localStorageSet = ClientFunction((pro) => localStorage.getItem(pro));

fixture `Registration`
  .page `${config.baseUrl}register`;

test('Successful Registration', async t => {
  await registration.typeFirstName(randomName);
  await registration.typeLastName(randomLast);
  await registration.typeUserName(username);
  await registration.typePassword(password);
  await registration.submitRegistration();

  await t.expect(registration.registerSuccessfulMsg.innerText).eql('Registration successful');

  const users = await localStorageSet('users');
  
  await t.expect(users).eql(`[{"firstName":"${randomName}","lastName":"${randomLast}","username":"${username}","password":"${password}","id":1}]`);
});

test('Required Fields', async t => {
  await registration.submitRegistration();

  await t.expect(registration.firstNameRequired.innerText).eql('First Name is required');
  await t.expect(registration.lastNameRequired.innerText).eql('Last Name is required');
  await t.expect(registration.userNameRequired.innerText).eql('Username is required');
  await t.expect(registration.passwordRequired.innerText).eql('Password is required');
});
