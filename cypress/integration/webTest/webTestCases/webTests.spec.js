/// <reference types="Cypress" />
import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Actions from "../../Actions/Actions";
import Asserts from "../../Actions/Asserts";

var productName = '';
var productPrize = '';
//--------------------------------------- Create User ---------------------------------------
Then('I enter username and password for {string}', (menu) => {

    Actions.loginSignupUser(menu);
})

And('I click on {string} button', (action) => {

    Actions.clickOn(action);
})

And('I verify user is created', () => {

    Asserts.verifyUserIsCreated();
})

//--------------------------------------- Login and logout user ---------------------------------------
And('I verify the user is {string}', (status) => {

    Asserts.verifyIfLoggedInOut(status);
})

//--------------------------------------- Add a laptop to the cart ---------------------------------------
When('I filter by {string}', (category) => {

    Actions.selectCategory(category);
})

Then('I pick the first element', () => {

    Actions.selectFirstProduct();
    cy.wrap(Actions.getProductName()).then((prodName)=>{

        productName = prodName.id;
    })
    cy.wrap(Actions.getProductPrize()).then((prodPrize)=>{

        productPrize = prodPrize.id.slice(1).slice(0,-14);
    })
})

Then('I add it to the cart', () => {

    Actions.addToCart();
})

And('I verify the product was added', () => {

    
    Asserts.verifyProductIsAdded(productName, productPrize);
})