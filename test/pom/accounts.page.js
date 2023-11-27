import { config } from 'dotenv';
config();

class Account {

    elements ={

        newButton : () => $('//a[@title="New"]'),
        accountName : () => $('>>>[name="Name"]'),
        phone1 : () => $('>>>[name="Phone"]'),
        nameWebsite : () => $('>>>[name="Website"]'),
        descriptionWebsite : () => $('//*[@data-field-id="RecordDescriptionField"]//textarea'),
        phone2 : () => $('//flexipage-field[@data-field-id="RecordPhoneField"]//input'),
        employees : () => $('//div[contains(@data-target-selection-name, "NumberOfEmployees")]//input'),
    }

    async click_NewButton() {
        
        await this.elements.newButton().click();
    }

    async fill_In_Accounts_Name_and_PhoneNumber(account, phonenumber1) {

        await this.elements.accountName().waitForDisplayed({timeout: 5000});
        await this.elements.accountName().setValue(account);
        await this.elements.phone1().setValue(phonenumber1);
    }

    async fill_In_Combo(label, comboElement){
        //always get the correct id based on the label        
        let type = await $(`//label[text()[contains(.,"${label}")]]/../div/lightning-base-combobox/div`)        
        await type.click()        
        await browser.keys(comboElement)        
        await browser.keys("\uE007");
    }

    async fill_In_additionalInformation(website, description, phonenumber2, employees){

        await this.elements.nameWebsite().scrollIntoView();
        await this.elements.nameWebsite().setValue(website);
        await this.elements.descriptionWebsite().setValue(description);
        await this.elements.phone2().setValue(phonenumber2);
        await this.elements.employees().setValue(employees);
    }

    async fill_In_AddressInformation(typeOfAddress, street, postalcode, city, provincy, country){

        let street_ = await $(`//*[contains(@data-target-selection-name, "${typeOfAddress}")]//textarea`)
        let postalCode_ = await $(`//*[contains(@data-target-selection-name, "${typeOfAddress}")]//input[@name="postalCode"]`)
        let city_ = await $(`//*[contains(@data-target-selection-name, "${typeOfAddress}")]//input[@name="city"]`)
        let province_ = await $(`//*[contains(@data-target-selection-name, "${typeOfAddress}")]//input[@name="province"]`)
        let country_ = await $(`//*[contains(@data-target-selection-name, "${typeOfAddress}")]//input[@name="country"]`)

        street_.setValue(street);
        postalCode_.setValue(postalcode);
        city_.setValue(city);
        province_.setValue(provincy);
        country_.setValue(country);
        await browser.pause(3000);

    }


}
export default new Account();