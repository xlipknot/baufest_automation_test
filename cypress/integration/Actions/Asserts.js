/// <reference types="Cypress" />
import Locators from "../../support/cssLocators";

export default class Asserts {

    static verifyUserIsCreated() {

        cy.on('window:confirm', (txt) => {
            expect(txt).to.contains('Sign up successful.');
        })
    }

    static verifyIfLoggedInOut(status) {

        switch (status) {
            case 'LoggedIn':
                let userName = Cypress.env('userName');
                let userProfile1 = Locators.webElement('userProfile');
                userProfile1.should('have.text', 'Welcome ' + userName);
                let logInLink1 = Locators.webElement('LogIn');
                logInLink1.should('not.be.visible');
                let logOutLink1 = Locators.webElement('LogOut');
                logOutLink1.should('be.visible');
                break;

            case 'LoggedOut':
                let userProfile2 = Locators.webElement('userProfile');
                userProfile2.should('not.be.visible');
                let logInLink2 = Locators.webElement('LogIn');
                logInLink2.should('be.visible');
                let logOutLink2 = Locators.webElement('LogOut');
                logOutLink2.should('not.be.visible');
                break;
        }
    }

    static verifyProductIsAdded(productName, productPrize){

        let productTable = Locators.webElement('productTable');
        productTable.should('not.be.empty');
        let product = Locators.webElement('prodName');
        product.should('have.text',productName);
        let prize = Locators.webElement('prodPrize');
        prize.should('have.text',productPrize);
    }
}