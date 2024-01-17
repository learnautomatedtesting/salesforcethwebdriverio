class Setup {

    elements ={

        appLauncher : () => $('[class="slds-icon-waffle"]'),
        service : () => $('//p[text()="Service"]'),
    }

    async click_AppLauncher() {
        
        await this.elements.appLauncher().waitForDisplayed();
        await this.elements.appLauncher().click();
    }

    async click_Service() {
        
        await this.elements.service().waitForDisplayed();
        await this.elements.service().click();
        await browser.pause(5000);
    }

}
export default new Setup();