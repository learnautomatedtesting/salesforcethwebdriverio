import HomePage from "../pom/home.page.js";
import LogIn from "../pom/login.page.js";
import Setup from "../pom/setup.page.js";
import Overview from "../pom/overview.page.js";
import Account from "../pom/accounts.page.js";
import { fill_In_Combo } from "../functions/functions.js";
import fs from "fs-extra";

let jsonData = "";

describe("Login Salesforce", () => {
  before(async () => {
    jsonData = await fs.readJson("./testdata.json");
  });

  it("Creating an account", async () => {
    // Navigate to the website
    await browser.url("/");

    // Accept all cookies Dutch version
    // await HomePage.click_AcceptCookiesNL();

    // Accept all cookies English version
    await HomePage.click_AcceptCookiesEN();

    // Navigate to the login page of Salesforce trial
    await HomePage.select_Login();

    // Actual login of Salseforce trial
    await LogIn.login_Salesforce();

    // Click on the App Launcher
    await Setup.click_AppLauncher();

    // Click on Service
    await Setup.click_Service();

    // Clicking on the Accounts button
    await Overview.click_AccountsButton();

    // Click the New button to create a new account
    await Account.click_NewButton();

    // Fill in the new account's details
    // Filling in details not inside of a (combobox) dropdown menu
    await Account.fill_In_Accounts_Information(
      jsonData.accounts.input.account,
      jsonData.accounts.input.accountNumber,
      jsonData.accounts.input.accountSite,
      jsonData.accounts.input.annualRevenue,
      jsonData.accounts.input.phonenumber,
      jsonData.accounts.input.fax,
      jsonData.accounts.input.website,
      jsonData.accounts.input.tickerSymbol,
      jsonData.accounts.input.employees,
      jsonData.accounts.input.sicCode
    );

    // Fill in the new account's details
    // Filling in details inside of a (combobox) dropdown menu
    // Filling in the associated Type of account
    await fill_In_Combo(
      jsonData.accounts.input.labelTypeOfAccount,
      jsonData.accounts.input.typeOfAccount
    );

    // Fill in the new account's details
    // Filling in details inside of a (combobox) dropdown menu
    // Filling in the associated Industry of account
    await fill_In_Combo(
      jsonData.accounts.input.labelTypeOfIndustry,
      jsonData.accounts.input.typeOfIndustry
    );

    // Fill in the new account's details
    // Filling in details inside of a (combobox) dropdown menu
    // Filling in the Rating of the account
    await fill_In_Combo(
      jsonData.accounts.input.labelOfRating,
      jsonData.accounts.input.typeOfRating
    );

    // Fill in the new account's details
    // Filling in details inside of a (combobox) dropdown menu
    // Filling in the Ownership of the account
    await fill_In_Combo(
      jsonData.accounts.input.labelOfOwnership,
      jsonData.accounts.input.typeOfOwnership
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

    // Fill in the new account's additional information
    // Filling in details inside of a (combobox) dropdown menu
    // Filling in the Customer Priority of the account
    await fill_In_Combo(
      jsonData.accounts.input.labelOfCustomerPriority,
      jsonData.accounts.input.typeOfCustomerPriority
    );

    // Fill in the new account's additional information
    // Filling in details inside of a (combobox) dropdown menu
    // Filling in if the account is active or not
    await fill_In_Combo(
      jsonData.accounts.input.labelOfActive,
      jsonData.accounts.input.typeOfActive
    );

    // Fill in the new account's additional information
    // Filling in details inside of a (combobox) dropdown menu
    // Filling in the service-level-agreement of the account
    await fill_In_Combo(
      jsonData.accounts.input.labelOfSLA,
      jsonData.accounts.input.typeOfSLA
    );

    // Fill in the new account's additional information
    // Filling in details inside of a (combobox) dropdown menu
    // Filling in if the account can be sold for a higher price
    await fill_In_Combo(
      jsonData.accounts.input.labelOfUpsellOpportunity,
      jsonData.accounts.input.typeOfUpsellOpportunity
    );

    // Fill in the new account's additional information
    // Filling in details not inside of a (combobox) dropdown menu
    await Account.fill_In_additionalInformation(
      jsonData.accounts.input.numberOfLocations,
      jsonData.accounts.input.slaSerialNumber
    );

    // Fill in a description of the new account
    await Account.fill_In_A_Description(
      jsonData.accounts.input.accountsDescription
    )


  });
});
