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
- Kies **(Y)** wanneer er gevraagd wordt of WDIO testfiles moet aanmaken _(Test folder - subfolders: e2e en pageobjects)_




Tijdens het runnen van het testscript, maak ik gebruik van de volgende attributen:
.waitForDisplayed()
.click()
.setValue()
.toHaveText()

Om het script goed te kunnen uitvoeren, zijn ook de volgende bibliotheken(_libaries_) nodig:
- fs van _fs-extra_
- config van _dotenv_



  

