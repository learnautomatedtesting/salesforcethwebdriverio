class Setup {
  elements = {
    appLauncher: () =>
      $('[class$="forceHeaderButton salesforceIdentityAppLauncherHeader"]'),
    service: () => $('//p[text()="Service"]'),
  };

//   async click_AppLauncher() {

//     let contentPanel = await $('[class="panel-content scrollable"]');

//     await this.elements.appLauncher().waitForExist();
//     await this.elements.appLauncher().moveTo();
//     await this.elements.appLauncher().waitForClickable();
//     await this.elements.appLauncher().click();

//     while (!contentPanel.isDisplayed()) {
//         await this.elements.appLauncher().click();
//         if(contentPanel.isDisplayed()) {
//             break;
//         }
//     }
//   }

async click_AppLauncher() {
    let contentPanel = await $('[class="panel-content scrollable"]');

    await this.elements.appLauncher().waitForExist();
    await this.elements.appLauncher().moveTo();
    await this.elements.appLauncher().waitForClickable();
    await this.elements.appLauncher().click();

    // Poll the display state of the content panel with a timeout to prevent an infinite loop
    let maxAttempts = 10; // Maximum number of attempts to check for the content panel
    let attempts = 0;
    while (!await contentPanel.isDisplayed() && attempts < maxAttempts) {
        await this.elements.appLauncher().click();
        await browser.pause(500); // Wait for half a second before checking again
        attempts++;
    }
    
    if (!await contentPanel.isDisplayed()) {
        throw new Error("Content panel is not displayed after multiple attempts");
    }
}

      async click_Service() {

          await this.elements.service().waitForExist();
          await this.elements.service().moveTo();
          await this.elements.service().waitForClickable();
          await this.elements.service().click();
      }

}




export default new Setup();