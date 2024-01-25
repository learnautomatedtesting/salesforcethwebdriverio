class Overview {

    elements ={

        viewProfileButton : () => $('[class*="userProfile-button"]'),
        logoutButton : () => $('[href="/secur/logout.jsp"]'),
        
    }


    async click_AccountsButton() {


        let test = await $('>>>[title="Accounts"]')         
        await browser.execute("arguments[0].click();",test)
    }

    async click_ViewProfileButton() {

        await this.elements.profileButton().waitForDisplayed();
        await this.elements.profileButton().click();
    }

    async click_LogoutButton() {

        await this.elements.logoutButton().waitForDisplayed();
        await this.elements.logoutButton().click();
    }


}
export default new Overview();