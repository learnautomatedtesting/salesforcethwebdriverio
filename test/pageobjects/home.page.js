class HomePage {

    elements ={

        acceptCookies : () => $('//button[@id="onetrust-accept-btn-handler"]'),
        salesforceButton : () => $('>>>[class="utility-icons-items login"]').$('>>>[href="https://login.salesforce.com/?locale=nl"]'),
    }

    async click_AcceptCookies() {
        
        await this.elements.acceptCookies().click();
    }

    async select_Login() {

        await $('>>>[class="utility-icons-items login"]').$('>>>[class="utility-button"]').moveTo();

        await this.elements.salesforceButton().waitForClickable();
        await this.elements.salesforceButton().click();
    }


}
export default new HomePage();