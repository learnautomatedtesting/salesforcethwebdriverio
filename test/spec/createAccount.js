import LoggingIn from "../pom/loggingInSalesForce.page.js"
import Overview from "../pom/overview.page.js";
import Account from "../pom/accounts.page.js";
import fs from "fs-extra";

let jsonData = "";

describe("Login Salesforce", () => {
  before(async () => {
    jsonData = await fs.readJson("./testdata.json");
  });

  it("Creating an account", async () => {
    // Navigate to the website
    await browser.url("/");

    // Login to Salesforce
    await LoggingIn.logginIntoSalesForce();    
    
    // Clicking on the Accounts button
    await Overview.click_AccountsButton();

    // Click the New button to create a new account
    await Account.click_NewButton();

    await Account.fill_In_Accounts_Name_and_PhoneNumber(
      jsonData.accounts.input.account,
      jsonData.accounts.input.phonenumber1
    );

    // Fill in the new account's details
    await Account.fill_In_Combo(
      jsonData.accounts.input.labelTypeOfAccount,
      jsonData.accounts.input.typeOfAccount
    );

    // Fill in the new account's details
    await Account.fill_In_Combo(
      jsonData.accounts.input.labelTypeOfIndustry,
      jsonData.accounts.input.typeOfIndustry
    );

    // Fill in additional information
    await Account.fill_In_additionalInformation(
      jsonData.accounts.input.website,
      jsonData.accounts.input.description,
      jsonData.accounts.input.phonenumber2,
      jsonData.accounts.input.employees
    );

    // Fill in the address information
    // There are two types of addresses: BillingAddress and ShippingAddress
    // Here the BillingAddress is requiered
    await Account.fill_In_AddressInformation(
      jsonData.accounts.billingAddress.billingAddress,
      jsonData.accounts.billingAddress.address,
      jsonData.accounts.billingAddress.postalCode,
      jsonData.accounts.billingAddress.city,
      jsonData.accounts.billingAddress.province,
      jsonData.accounts.billingAddress.country
    );

    // Fill in the address information
    // There are two types of addresses: BillingAddress and ShippingAddress
    // Here the ShippingAddress is requiered
    await Account.fill_In_AddressInformation(
      jsonData.accounts.shippingAddress.shippingAddress,
      jsonData.accounts.shippingAddress.address,
      jsonData.accounts.shippingAddress.postalCode,
      jsonData.accounts.shippingAddress.city,
      jsonData.accounts.shippingAddress.province,
      jsonData.accounts.shippingAddress.country
    );
  });
});
