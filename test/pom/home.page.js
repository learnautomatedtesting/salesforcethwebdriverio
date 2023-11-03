import { config } from 'dotenv';

class HomePage {

    elements ={

        acceptCookies: () => $('//button[text()="Alle cookies accepteren"]'),
        inloggen : () => $('//hgf-c360nav[@locale="nl"]').shadow$('//span[text()="Inloggen"]'),
    }

    async click_AcceptCookies() {
        await this.elements.acceptCookies().click();
    }

    async click_Inloggen_Button() {
        await this.elements.inloggen().waitForDisplayed({timeout: 5000});
        await this.elements.inloggen().moveTo();
        // await this.elements.inloggen().click();
    }


}
export default new HomePage();