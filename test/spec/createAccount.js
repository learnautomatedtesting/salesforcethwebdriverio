import HomePage from '../pom/home.page.js'
import LogIn from '../pom/login.page.js'

describe('Login Salesforce', ()=> {
    it('Create an Account', async ()=> {
    
    // Navigate to the website
    await browser.url('https://www.salesforce.com/nl/');

    // Accept all cookies
    await HomePage.click_AcceptCookies();

    // Navigate to the login page of Salesforce trial
    await HomePage.select_Login();

    // Actual login of Salseforce trial
    await LogIn.login_Salesforce();

    await browser.pause(5000);
})

})