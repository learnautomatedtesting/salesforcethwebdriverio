import HomePage from '../pom/home.page.js'
import LogIn from '../pom/login.page.js'
import fs from 'fs-extra';

let jsonData = "";

// npx wdio run ./wdio.conf.js --spec createAccount.js  --mochaOpts.grep "Logging in"

describe('Login Salesforce', ()=> {
    before(async () => {
        jsonData = await fs.readJson('./testdata.json');
      });

    it('Logging in', async ()=> {
    
    // Navigate to the website
    await browser.url('https://www.salesforce.com/nl/');

    // Accept all cookies
    await HomePage.click_AcceptCookies();

    // Navigate to the login page of Salesforce trial
    await HomePage.select_Login();

    // Actual login of Salseforce trial
    await LogIn.login_Salesforce();

    // Verifying of the successful login
    const connect_with_your_customers = await $('//strong[text()="Connect with Your Customers"]');
    await connect_with_your_customers.waitForDisplayed({timeout: 5000});
    await expect(connect_with_your_customers).toHaveText(jsonData.output.connectWithYourCustomers);
})

it('Creating an account', async ()=> {

    
})


})