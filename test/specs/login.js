import HomePage from "../pageobjects/home.page.js";
import LogIn from "../pageobjects/login.page.js";
import Setup from "../pageobjects/setup.page.js";
import Overview from "../pageobjects/overview.page.js";
import fs from "fs-extra";
import { config } from 'dotenv';
config();

let jsonData = "";

// npx wdio run ./wdio.conf.js --spec loggingInSalesforce.js

describe("Login Salesforce", () => {
  before(async () => {
    // Load in the testdat.json file
    jsonData = await fs.readJson("./testdata.json");

    // Maximize the browser window
    await browser.maximizeWindow();
    // Navigate to the website
    await browser.url("/");
    // Assertion on the URL
    await expect(browser).toHaveUrlContaining('https://www.salesforce.com/nl/');
  });
  
  it("Logging in", async () => {
   
     // Accept all cookies
     await HomePage.click_AcceptCookies()

     // Navigate to the login page of Salesforce trial
     await HomePage.select_Login();
 
     // Actual login of Salseforce trial
     await LogIn.login_Salesforce(
      process.env.USERNAMESF,
      process.env.PASSWORD
     );
 
     // Click on the App Launcher
     await Setup.click_AppLauncher();
 
     // Click on Service
     await Setup.click_Service();
    
    // Verifying of the successful login
    const quarterly_performance = await $('[title="Quarterly Performance"]');
    
    await quarterly_performance.waitForDisplayed();
    await expect(quarterly_performance).toHaveText(
      jsonData.loggingIn.output.quarterlyPerformance
    );

  });


  it("Logging out", async () => {
    
    // Click the View Profile button
    await Overview.click_ViewProfileButton();

    // Select Log Out
    await Overview.click_LogoutButton();
    await browser.pause(3000)
    // Verify the succesful logout
    const inloggen = await $('[id="Login"]')

    await inloggen.waitForDisplayed();
    await expect(inloggen).toHaveValue(
      jsonData.loggingIn.output.inloggen
    )

  });


  it("Logging in with invalid credentials - Invalid password", async () => {
    
    // Actual login of Salseforce trial
    await LogIn.login_Salesforce(
      process.env.USERNAMESF,
      jsonData.loggingIn.login.invalidPassword
     );

    const error = await $('[id="error"]')
    await error.waitForDisplayed();
    await expect(error).toHaveText(
      jsonData.loggingIn.output.loginError
    )

  });

  it("Logging in with invalid credentials - Invalid email", async () => {
    
    // Actual login of Salseforce trial
    await LogIn.login_Salesforce(
      jsonData.loggingIn.login.invalidEmail,
      process.env.PASSWORD,
     );

    const error = await $('[id="error"]')
    await error.waitForDisplayed();
    await expect(error).toHaveText(
      jsonData.loggingIn.output.loginError
    )

  });
 
});
