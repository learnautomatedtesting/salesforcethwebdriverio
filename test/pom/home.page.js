class HomePage {

    elements ={

        acceptCookies : () => $('//button[@id="onetrust-accept-btn-handler"]'),
        menuButton : () => $('>>>[class="icon hamburger-img show"]'),
        inloggenButton : () => $('>>>[class="l1-button login"]').$('>>>[class="hgf-button"]'),
        salesforceButton : () => $('>>>[class="hide-on-desktop active-l1"]').$('>>>[href="https://login.salesforce.com/?locale=nl"]'),
        userName : () => $('[id="username"]'),
        password : () => $('[id="password"]'),
        loginButton : () => $('[type="submit"]'),
    }

    async click_AcceptCookies() {
        
        await this.elements.acceptCookies().click();
    }

    async click_AcceptCookiesEN() {
        
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