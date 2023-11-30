import { config } from 'dotenv';
config();

class Account {
  elements = {
    newButton: () => $('//a[@title="New"]'),
    accountName: () => $('>>>[name="Name"]'),
    accountNumber: () => $('>>>[name="AccountNumber"]'),
    accountSite: () => $('>>>[name="Site"]'),
    annualRevenue: () => $('>>>[name="AnnualRevenue"]'),
    phone: () => $('>>>[name="Phone"]'),
    fax: () => $('>>>[name="Fax"]'),
    tickerSymbol: () => $('>>>[name="TickerSymbol"]'),
    nameWebsite: () => $('>>>[name="Website"]'),
    employees: () =>$('//div[contains(@data-target-selection-name, "NumberOfEmployees")]//input'),
    sicCode: () => $('>>>[name="Sic"]'),
    numberOfLocations: () => $('//input[@name="NumberofLocations__c"]'),
    slaSerialNumber: () => $('//input[@name="SLASerialNumber__c"]'),
    description: () => $('//label[contains(text(), "Description")]/..//div/textarea'),
    saveButton: () => $('>>>//button[text()= "Save"]'),
  };

  async click_NewButton() {
    await this.elements.newButton().click();
  }

  async fill_In_Accounts_Information(
    account,
    number,
    site,
    revenue,
    phonenumber,
    fax,
    website,
    tSymbol,
    employees,
    sicCode
  ) {
    await this.elements.accountName().waitForDisplayed();
    await this.elements.accountName().setValue(account);
    await this.elements.accountNumber().setValue(number);
    await this.elements.accountSite().setValue(site);
    await this.elements.annualRevenue().setValue(revenue);
    await this.elements.phone().setValue(phonenumber);
    await this.elements.fax().setValue(fax);
    await this.elements.nameWebsite().setValue(website);
    await this.elements.tickerSymbol().setValue(tSymbol);
    await this.elements.employees().setValue(employees);
    await this.elements.sicCode().setValue(sicCode);
  }

  async fill_In_AddressInformation(
    typeOfAddress,
    street,
    postalcode,
    city,
    provincy,
    country
  ) {
    let street_ = await $(
      `//*[contains(@data-target-selection-name, "${typeOfAddress}")]//textarea`
    );
    let postalCode_ = await $(
      `//*[contains(@data-target-selection-name, "${typeOfAddress}")]//input[@name="postalCode"]`
    );
    let city_ = await $(
      `//*[contains(@data-target-selection-name, "${typeOfAddress}")]//input[@name="city"]`
    );
    let province_ = await $(
      `//*[contains(@data-target-selection-name, "${typeOfAddress}")]//input[@name="province"]`
    );
    let country_ = await $(
      `//*[contains(@data-target-selection-name, "${typeOfAddress}")]//input[@name="country"]`
    );

    await street_.setValue(street);
    await postalCode_.setValue(postalcode);
    await city_.setValue(city);
    await province_.setValue(provincy);
    await country_.setValue(country);
  }

  async fill_In_additionalInformation(
    locations,
    slaserialnumber,
    
  ) {

    await this.elements.numberOfLocations().setValue(locations);
    await this.elements.slaSerialNumber().setValue(slaserialnumber);
  }

  async fill_In_A_Description(accountDescription) {
    await this.elements.description().setValue(accountDescription)
  }

  async click_SaveButton() {
    await this.elements.saveButton().click()
  }
}
export default new Account();