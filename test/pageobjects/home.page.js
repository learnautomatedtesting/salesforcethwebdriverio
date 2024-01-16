class HomePage {

    elements ={

        acceptCookies : () => $('//button[@id="onetrust-accept-btn-handler"]'),
        menuButton : () => $('>>>[class="icon hamburger-img show"]'),
        inloggenButton : () => $('>>>[class="l1-button login"]').$('>>>[class="hgf-button"]'),
        salesforceButton : () => $('>>>[class="hide-on-desktop active-l1"]').$('>>>[href="https://login.salesforce.com/?locale=nl"]'),
    }

    async click_AcceptCookies() {
        
        await this.elements.acceptCookies().click();
    }

    async select_Login() {

        await this.elements.menuButton().waitForDisplayed();
        await this.elements.menuButton().click();
        await this.elements.inloggenButton().waitForDisplayed();
        await this.elements.inloggenButton().click();
        await this.elements.salesforceButton().waitForDisplayed();
        await this.elements.salesforceButton().click();
    }


}
export default new HomePage();