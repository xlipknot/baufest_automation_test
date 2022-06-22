# Demo_automation_test
Demo Automation framework

To run this tests after cloning the project, you will have to open a new terminal and it must be executed the command:
 npm install
this so all the dependencies get installed, after that run:
 npx cypress open
this will install the node_modules folder and will open the test runner

Once the test runner is opened, you can execute the feature you want just by clicking on the hyperlink and you'll be able to see the execution of every test

If you want to run all the tests headlessly, run the command:
 npx cypress run
this way won't be able to watch the execution, but a report will be showned. Also this way a new report will be populated in the path mentiones below.


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
