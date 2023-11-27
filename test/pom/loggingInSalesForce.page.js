import HomePage from "./home.page.js";
import LogIn from "./login.page.js";
import Setup from "./setup.page.js"

class LoggingInSalesForce {


async logginIntoSalesForce(){
    await HomePage.click_AcceptCookies();
    await HomePage.select_Login();
    await LogIn.login_Salesforce();
    await Setup.click_AppLauncher();
    await Setup.click_Service();

}

}

export default new LoggingInSalesForce();