class HomePage {

    elements ={

        acceptCookies : () => $('//button[@id="onetrust-accept-btn-handler"]'),
<<<<<<< HEAD:test/pom/home.page.js
        salesforceButton : () => $('>>>[class="utility-icons-items login"]').$('>>>[href="https://login.salesforce.com/?locale=nl"]'),
=======
        menuButton : () => $('>>>[class="icon hamburger-img show"]'),
        inloggenButton : () => $('>>>[class="l1-button login"]').$('>>>[class="hgf-button"]'),
        salesforceButton : () => $('>>>[class="hide-on-desktop active-l1"]').$('>>>[href="https://login.salesforce.com/?locale=nl"]'),
>>>>>>> 84e413e5afbe6604a4a070f2293d85d919fd6ed7:test/pageobjects/home.page.js
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