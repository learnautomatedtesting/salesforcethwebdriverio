import LoggingInSalesForce from "../pom/loggingInSalesForce.page.js"
import fs from "fs-extra";

let jsonData = "";

// npx wdio run ./wdio.conf.js --spec loggingInSalesforce.js

describe("Login Salesforce", () => {
  before(async () => {
    jsonData = await fs.readJson("./testdata.json");
  });
  
  it("Logging in", async () => {
    // Navigate to the website
    await browser.url("/");

    // Login to Salesforce
    await LoggingInSalesForce.logginIntoSalesForce();
    
    // Verifying of the successful login
    const quarterly_performance = await $('[title="Quarterly Performance"]');
    
    await quarterly_performance.waitForDisplayed();
    await expect(quarterly_performance).toHaveText(
      jsonData.loggingIn.output.quarterlyPerformance
    );

  });
 
});
