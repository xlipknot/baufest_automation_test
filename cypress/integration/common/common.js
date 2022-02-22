/// <reference types="Cypress" />
import { Given } from "cypress-cucumber-preprocessor/steps";
import Locators from "../../support/cssLocators";

Given('I go to demoblaze site', () => {

    let baseUrl = Cypress.env('baseURL');

    cy.visit(baseUrl);
})

When('I click on {string} menu', (menu) => {

    let topMenu = Locators.webElement(menu);
    topMenu.click({ force: true });
})