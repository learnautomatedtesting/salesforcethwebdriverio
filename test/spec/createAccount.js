import HomePage from '../pom/home.page.js'

describe('Login Salesforce', ()=> {
    it('Create an Account', async ()=> {
    
    // Navigate to the website
    await browser.url('https://www.salesforce.com/nl/');

    // Accept all cookies
    await HomePage.click_AcceptCookies();

    // Login to Salesforce trial
    await HomePage.click_Inloggen_Button();
})

})