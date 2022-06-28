/// <reference types="Cypress" />
import randomstring from "randomstring";
import Locators from "../../support/cssLocators";
import Asserts from "../Actions/Asserts";

let userName = '';
let password = '';


export default class Actions {

    static loginSignupUser(menu) {

        switch (menu) {

            case 'SignUp':
                let userSignUpTxt = Locators.webElement('username_signUp_text');
                userName = randomstring.generate();
                userSignUpTxt.type(userName, { force: true });
                Asserts.setUserName(userName);

                let pwdSignUpTxt = Locators.webElement('password_signUp_text');
                password = randomstring.generate();
                pwdSignUpTxt.type(password, { force: true });
                break;

            case 'LogIn':
                let userLoginTxt = Locators.webElement('username_login_text');
                userLoginTxt.type(userName, { force: true });

                let pwdLoginTxt = Locators.webElement('password_login_text');
                pwdLoginTxt.type(password, { force: true });
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

    static clickOnMenu(menu){
    
        switch(menu){

            case 'Flights':
                Locators.webElement(menu).click();
                break;
        }
    }

    static selectFromToFlight(flight){

        switch(flight){

            case 'From':
                Locators.webElement('flightsFromDropdown').select('CDMX');
                break;

            case 'To':
                Locators.webElement('flightsToDropdown').select('Chihuahua');
                break;
        }
    }

    static selectDepartReturnDate(date){

        switch(date){

            case 'Departing':
                Locators.webElement('departingDateCal').type('20/06/2022');
                break;

            case 'Returning':
                Locators.webElement('returningDateCal').type('28/06/2022');
                break;
        }
    }

    static clickOnSearch(){
        Locators.webElement(searchBtn).click();
    }

    static sortPricesBy(order){

        switch(order){

            case 'descending':
                Locators.webElement('sortPricesDropDown').select('Price descending');
                break;
        }
    }
}