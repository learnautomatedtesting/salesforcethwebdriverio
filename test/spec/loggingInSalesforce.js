import HomePage from "../pom/home.page.js";
import LogIn from "../pom/login.page.js";
import Setup from "../pom/setup.page.js"
import fs from "fs-extra";

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
  });
  
  it("Logging in", async () => {

    // Assertion on the URL
    await expect(browser).toHaveUrl('https://www.salesforce.com/nl/?ir=1');
    
     // Accept all cookies
     await HomePage.click_AcceptCookies()

     // Navigate to the login page of Salesforce trial
     await HomePage.select_Login();
 
     // Actual login of Salseforce trial
     await LogIn.login_Salesforce();
 
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
 
});
