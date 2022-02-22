/// <reference types="Cypress" />
import Locators from "../../support/cssLocators";

export default class Actions {

    static loginSignupUser(menu) {

        switch (menu) {

            case 'SignUp':
                let userSignUpTxt = Locators.webElement('username_signUp_text');
                let userSignUp = Cypress.env('userName');
                userSignUpTxt.type(userSignUp, { force: true });

                let pwdSignUpTxt = Locators.webElement('password_signUp_text');
                let passSignUp = Cypress.env('password');
                pwdSignUpTxt.type(passSignUp, { force: true });
                break;

            case 'LogIn':
                let userLoginTxt = Locators.webElement('username_login_text');
                let userLogin = Cypress.env('userName');
                userLoginTxt.type(userLogin, { force: true });

                let pwdLoginTxt = Locators.webElement('password_login_text');
                let pwdLogin = Cypress.env('password');
                pwdLoginTxt.type(pwdLogin, { force: true });
                break;
        }
    }

    static clickOn(action) {

        switch (action) {
            case 'SignUp':
                let signUp = Locators.webElement('signUp_btn');
                signUp.click({ force: true });
                break;

            case 'LogIn':
                let logIn = Locators.webElement('logIn_btn');
                logIn.click({ force: true });
                break;
        }
    }

    static selectCategory(category) {

        let cat = Locators.webElement(category);
        cat.click({ force: true });
        cy.wait(3);
    }

    static selectFirstProduct() {

        let listOfProducts = Locators.webElement('catalog');
        let firstProduct = listOfProducts.first();
        firstProduct.click({ force: true });
        cy.wait(5);
    }

    static getProductName() {

        let productName = Locators.webElement('productName');
        let prodName = {};

        productName.invoke('text').then((text) => {
            return new Promise((resolve)=>{
                prodName.id = text;
                resolve(text);
            })
        })
        return prodName;
    }

    static getProductPrize() {

        let productPrize = Locators.webElement('productPrize');
        let prodPrize = {};

        productPrize.invoke('text').then((text) => {
            return new Promise((resolve)=>{
                prodPrize.id = text;
                resolve(text);
            })
        })
        return prodPrize;
    }

    static addToCart() {

        let add = Locators.webElement('addToCart');
        add.click({ force: true });
        cy.wait(3);
    }
}