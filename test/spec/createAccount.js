import HomePage from '../pom/home.page.js'
import LogIn from '../pom/login.page.js'
import Overview from '../pom/overview.page.js'
import Account from '../pom/accounts.page.js'
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

  // Clicking on the Accounts button
  await Overview.click_AccountsButton();

  // Click the New button to create a new account
  await Account.click_NewButton();

  await Account.fill_In_Accounts_Name_and_PhoneNumber(jsonData.input.account, jsonData.input.phonenumber1)

  // Fill in the new account's details
  await Account.fill_In_Combo('Type', 'Prospect');

  // Fill in the new account's details
  await Account.fill_In_Combo('Industry', 'Banking');

  // Fill in additional information
  await Account.fill_In_additionalInformation(jsonData.input.website, jsonData.input.description,
                                              jsonData.input.phonenumber2, jsonData.input.employees);
  
  // Fill in the address information
  // There are two types of addresses: BillingAddress and ShippingAddress
  // Here the BillingAddress is requiered
  await Account.fill_In_AddressInformation('BillingAddress', jsonData.input.address, jsonData.input.postalCode, 
                                            jsonData.input.city, jsonData.input.province,
                                            jsonData.input.country);

  // Fill in the address information
  // There are two types of addresses: BillingAddress and ShippingAddress
  // Here the ShippingAddress is requiered
  await Account.fill_In_AddressInformation('ShippingAddress', jsonData.input.address, jsonData.input.postalCode, 
                                            jsonData.input.city, jsonData.input.province,
                                            jsonData.input.country);

})

})