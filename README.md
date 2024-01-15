proces is de beschrijving van de test en hoe je tot die test gekomen bent, waarbij  dit voorkomt in je test .
Click button & assert URL text
Find Element & Get Text
Finding Multiple Elements ($$)
Know your WebdriverIO Commands
Settext, button clicks, gettext, dropdown, checkbox, scrollen
Pause command
Common Wait commands
waitUntil command
Mocha 


Om te beginnen heb ik een Page Object Model file aangemaakt.
Het Page Object Model (POM) is een methode voor webautomatisering waarbij je webpagina's in aparte objecten verdeelt. Deze objecten bevatten elementen en acties specifiek voor elke pagina, waardoor je tests eenvoudiger te onderhouden zijn en minder gevoelig zijn voor wijzigingen op de website.

Deze elementen implementeer ik in functies, die in mijn testscript aangeroepen kunnen worden om de code daadwerkelijk uit te voeren:

**POM HOMEPAGE**

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


**POM LOGINPAGE**

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

**TESTSCRIPT**
    
    import HomePage from "../pom/home.page.js";
    import LogIn from "../pom/login.page.js";
    import Setup from "../pom/setup.page.js"
    import fs from "fs-extra";

    let jsonData = "";

    // npx wdio run ./wdio.conf.js --spec loggingInSalesforce.js

    describe("Login Salesforce", () => {
    before(async () => {
    // Load in the testdat.json file
    jsonData = await fs.readJson("./testdata.json");

    // Navigate to the website
    await browser.url("/");
    });
  
    it("Logging in", async () => {

    // Assertion on the URL
    await expect(browser).toHaveUrl('https://www.salesforce.com/nl/?ir=1');
    
     // Accept all cookies
     await HomePage.click_AcceptCookies()

     // Navigate to the login page of Salesforce trial
     await HomePage.select_Login();
 
     // Actual login of Salseforce trial
     await LogIn.login_Salesforce();
 
     // Click on the App Launcher
     await Setup.click_AppLauncher();
 
     // Click on Service
     await Setup.click_Service();
    
    // Verifying of the successful login
    const quarterly_performance = await $('[title="Quarterly Performance"]');
    
    await quarterly_performance.waitForDisplayed();
    await expect(quarterly_performance).toHaveText(
      jsonData.loggingIn.output.quarterlyPerformance
    );

    });
 
    });


Tijdens het testen valideer ik eerst of de juiste URL gebruikt is, door er een _assertion_ op te plegen, door middel van een **expect** 
    // Assertion on the URL
    await expect(browser).toHaveUrl('https://www.salesforce.com/nl/?ir=1');

Daarna volgt de gehele inlogprocedure.

Tijdens het runnen van het testscript, maak ik gebruik van de volgende attributen:
.waitForDisplayed()
.click()
.setValue()
.toHaveText()

Om het script goed te kunnen uitvoeren, zijn ook de volgende bibliotheken(_libaries_) nodig:
- fs van _fs-extra_
- config van _dotenv_



  

