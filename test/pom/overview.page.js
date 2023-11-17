class Overview {

    elements ={

        //accountsButton : () => $('>>>[class="bBottom"]').$('>>>[title="Accounts"]'),
        profileButton : () => $('[title="User"]'),
        
    }


    async click_AccountsButton() {

        // await this.elements.accountsButton().waitForDisplayed({timeout: 5000});
        // await this.elements.accountsButton().click();

        let test = await $('>>>[title="Accounts"]')         
        await browser.execute("arguments[0].click();",test)
    }

    async click_ProfileButton() {

        await this.elements.profileButton().waitForDisplayed({timeout: 5000});
        await this.elements.profileButton().click();
    }


}
export default new Overview();