# baufest_automation_test
Automation framework for Baufest test

To run this tests after cloning the project, it must be eecuted the command:
 npm install
this so all the dependencies get installed

This Framework tests Web and API functionalities: 
All the code is found in the path: cypress/integration
The web scenarios are in the path: cypress/integration/webTest
The API scenarios are in the path: cypress/integration/apiTest
This folders contain the .feature and .spec.js files for test cases

The common and Actions folders contain code to to make the framework more modular and are called from the .spec.js files
The CSS locators are in the path: cypress/support/cssLocators.js
The config file for environment variables are in the path: cypress/config

The json files for the API tests that contain the reponse of the services are in the path: cypress/fixtures
These files will remain empty until the tests are executed

The reports are in the path: cypress/report/mochawesome_reports