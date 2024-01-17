import { config } from 'dotenv';
config();

class LogIn {

    elements ={

        userName : () => $('[id="username"]'),
        password : () => $('[id="password"]'),
        loginButton : () => $('[type="submit"]'),
    }


    async login_Salesforce() {

        const username = process.env.USERNAMESF;
        const password = process.env.PASSWORD;

        await this.elements.userName().waitForDisplayed();
        await this.elements.userName().setValue(username);
        await this.elements.password().setValue(password);
        await this.elements.loginButton().click();
    }


}
export default new LogIn();