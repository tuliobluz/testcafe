import registration from './pages/RegistrationPage';

fixture `Registration`
    .page `http://localhost:8080/register`;

test('My first test', async t => {
    await registration.typeFirstName('Test');
    await registration.typeLastName('Test');
    await registration.typeUserName('Test182');
    await registration.typePassword('Test1234!');
        
});