import LogIn from "./pageobjects/login.page.js";
import Setup from "./pageobjects/setup.page.js";
import Overview from "./pageobjects/overview.page.js";
import Account from "./pageobjects/accounts.page.js";
import fs from "fs-extra";
import { config } from 'dotenv';
config();

class DeleteAccount {

    constructor() {
        this.jsonData = null;
    }

    async initialize() {
        this.jsonData = await fs.readJson("./testdata.json");
    }

    async deleteAccounts() {
        // Actual login of Salseforce trial
        await LogIn.login_Salesforce(
        process.env.SALESFORCE_USERNAME,
        process.env.SALESFORCE_PASSWORD
       );
   
       // Click on the App Launcher
       await Setup.click_AppLauncher();
   
       // Click on Service
       await Setup.click_Service();

       // Clicking on the Accounts button
      await Overview.click_AccountsButton();

      // Deleting the already existing account
      await Account.deleteExistingAccounts(
      this.jsonData.accounts.input.account1
    );

    }

}

export default new DeleteAccount();