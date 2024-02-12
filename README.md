**SALESFORCE**


**Doel van dit project**

Het volledig automatiseren van de handelingen op de Salesforce website.

Dit betreft:
- Automatiseren van het inlogproces
- Automatiseren van het aanmaken van een nieuw account

Om dit te bewerkstelligen is het volgende nodig:
- [node.js](https://nodejs.org/en)
- [Visual Studio Code](https://code.visualstudio.com/)
- [WebdriverIO](https://webdriver.io/)
- [Salesforce website](https://www.salesforce.com/nl/)


Maak een project aan op je **Operation System** en installeer node.js en VSC volgens de instructies

**OPZETTEN TEST FRAMEWORK**
- In VSC, installeer WDIO via de terminal
- Volg de instructies en kies **Mocha** als framework
- Kies **(Y)** wanneer er gevraagd wordt of WDIO testfiles moet aanmaken _(Test folder - subfolders: pageobjects en specs)_

**Pageobjects**

- In deze [folder](https://github.com/Jeffrey-Jongkees/Salesforce/tree/testing/test/pageobjects) krijgen de webpagina's een aparte file waar alle elementen in worden opgeslagen en functies in worden beschreven
- Deze functies worden in het testscript aangeroepen
- Er wordt geprobeerd om de elementen in deze functies zo variabel mogelijk te houden
- Dit zorgt ervoor dat het testscript overzichtelijk blijft en verschillende elementen gebruikt kunnen zonder het testscript te hoeven aanpassen

**Specs**
- In de [specfiles](https://github.com/Jeffrey-Jongkees/Salesforce/tree/testing/test/specs) staan de testscripts gedefinieerd.
  

**DRAAIEN VAN SCRIPTS**

Op de landingspagina (homepage) van Salesforce wordt gebruik gemaakt van een **shadowDOM**.
In de root folders hiervan (**shadow-root**) zitten de elementen voor het _Inloggen_ genest.

![image](https://github.com/Jeffrey-Jongkees/Salesforce/assets/135017230/796c4018-09ed-4115-8457-c59390690132)

- Om de elementen te kunnen benaderen is er gebruik gemaakt van **WDIO's** [Deep selectors](https://webdriver.io/docs/selectors/#deep-selectors)
- Het is noodzakelijk om de _parent node_ waar het element zich in bevindt ook aan te spreken/mee te nemen in de selector. Zie onderstaande code snippet

      inloggenButton : () => $('>>>[class="l1-button login"]').$('>>>[class="hgf-button"]')


- Uit veiligheidsoverwegingen is ervoor gekozen om **environment variablen** te gebruiken bij het invoeren van de credentials
- De .env file staat in de .gitignore file en worden ook niet geupload naar GitHub
![env blur](https://github.com/Jeffrey-Jongkees/Salesforce/assets/135017230/c09206ef-29a3-4315-93c3-86176dcda067)

**Commands**

Tijdens het runnen van het testscript, is er gebruik gemaakt van de volgende commands:
- .waitForDisplayed()
- .click()
- .setValue()
- .toHaveText()

Deze zijn terug te vinden op de WDIO's [website](https://webdriver.io/docs/api/element)

**Libaries**

Om de scripts goed te kunnen uitvoeren, zijn ook de volgende packages (_libaries_) nodig:
- fs van _fs-extra_
- config van _dotenv_

Deze zijn terug te vinden op [npmjs.com](https://www.npmjs.com/) en worden geinstallleerd via npm.



  

**Doel van dit project**

Het volledig automatiseren van de handelingen op de Salesforce website.

Dit betreft:
- Automatiseren van het inlogproces
- Automatiseren van het aanmaken van een nieuw account

Om dit te bewerkstelligen is het volgende nodig:
- [node.js](https://nodejs.org/en)
- [Visual Studio Code](https://code.visualstudio.com/)
- [WebdriverIO](https://webdriver.io/)
- [Salesforce website](https://www.salesforce.com/nl/)


Maak een project aan op je **Operation System** en installeer node.js en VSC volgens de instructies

**OPZETTEN TEST FRAMEWORK**
- In VSC, installeer WDIO via de terminal
- Volg de instructies en kies **Mocha** als framework
- Kies **(Y)** wanneer er gevraagd wordt of WDIO testfiles moet aanmaken _(Test folder - subfolders: pageobjects en specs)_

**Pageobjects**

- In deze [folder](https://github.com/Jeffrey-Jongkees/Salesforce/tree/testing/test/pageobjects) krijgen de webpagina's een aparte file waar alle elementen in worden opgeslagen en functies in worden beschreven
- Deze functies worden in het testscript aangeroepen
- Er wordt geprobeerd om de elementen in deze functies zo variabel mogelijk te houden
- Dit zorgt ervoor dat het testscript overzichtelijk blijft en verschillende elementen gebruikt kunnen zonder het testscript te hoeven aanpassen

**Specs**
- In de [specfiles](https://github.com/Jeffrey-Jongkees/Salesforce/tree/testing/test/specs) staan de testscripts gedefinieerd
  

**DRAAIEN VAN SCRIPTS**

Op de landingspagina (homepage) van Salesforce wordt gebruik gemaakt van een **shadowDOM**.
In de root folders hiervan (**shadow-root**) zitten de elementen voor het _Inloggen_ genest.

![image](https://github.com/Jeffrey-Jongkees/Salesforce/assets/135017230/796c4018-09ed-4115-8457-c59390690132)

- Om de elementen te kunnen benaderen is er gebruik gemaakt van **WDIO's** [Deep selectors](https://webdriver.io/docs/selectors/#deep-selectors)
- Het is noodzakelijk om de _parent node_ waar het element zich in bevindt ook aan te spreken/mee te nemen in de selector. Zie onderstaande code snippet

      inloggenButton : () => $('>>>[class="l1-button login"]').$('>>>[class="hgf-button"]')


- Uit veiligheidsoverwegingen is ervoor gekozen om **environment variablen** te gebruiken bij het invoeren van de credentials
- De .env file staat in de .gitignore file en worden ook niet geupload naar GitHub
![env blur](https://github.com/Jeffrey-Jongkees/Salesforce/assets/135017230/c09206ef-29a3-4315-93c3-86176dcda067)

**Commands**

Tijdens het runnen van het testscript, is er gebruik gemaakt van de volgende commands:
- .waitForDisplayed()
- .click()
- .setValue()
- .toHaveText()

Deze zijn terug te vinden op de WDIO's [website](https://webdriver.io/docs/api/element)

**Libaries**

Om de scripts goed te kunnen uitvoeren, zijn ook de volgende packages (_libaries_) nodig:
- fs van _fs-extra_
- config van _dotenv_

Deze zijn terug te vinden op [npmjs.com](https://www.npmjs.com/) en worden geinstallleerd via npm.