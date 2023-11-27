class Overview {

    elements ={

        profileButton : () => $('[title="User"]'),
        
    }


    async click_AccountsButton() {


        let test = await $('>>>[title="Accounts"]')         
        await browser.execute("arguments[0].click();",test)
    }

    async click_ProfileButton() {

        await this.elements.profileButton().waitForDisplayed();
        await this.elements.profileButton().click();
    }


}
export default new Overview();