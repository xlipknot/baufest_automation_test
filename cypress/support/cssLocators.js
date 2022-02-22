/// <reference types="Cypress" />

export default class Locators{

    static webElement(locator){

        switch(locator){

            // Menus
            case 'Home': return cy.get('a.nav-link').contains('Home ');
            case 'LogIn': return cy.get('a#login2').contains('Log in');
            case 'LogOut': return cy.get('a#logout2');
            case 'SignUp': return cy.get('a#signin2');
            case 'Cart': return cy.get('a#cartur').contains('Cart');
            case 'userProfile': return cy.get('a#nameofuser');

            // Sign Up elements
            case 'username_signUp_text': return cy.get('input#sign-username');
            case 'password_signUp_text': return cy.get('input#sign-password');
            case 'signUp_btn': return cy.get('button.btn.btn-primary').contains('Sign up');

            // Log In elements
            case 'username_login_text': return cy.get('input#loginusername');
            case 'password_login_text': return cy.get('input#loginpassword');
            case 'logIn_btn': return cy.get('button.btn.btn-primary').contains('Log in');

            // Cart elements
            case 'productTable': return cy.get('tbody#tbodyid');
            case 'listProucts': return cy.get('tbody#tbodyid > tr.success');
            case 'prodName': return cy.get('tbody#tbodyid > tr.success > td:nth-child(2)');
            case 'prodPrize': return cy.get('tbody#tbodyid > tr.success > td:nth-child(3)');

            // Categories
            case 'Laptops': return cy.get('a#itemc').contains('Laptops');

            //Catalog
            case 'catalog': return cy.get('div#tbodyid > div > div > a > img');
            case 'productName': return cy.get('h2.name');
            case 'productPrize': return cy.get('h3.price-container');
            case 'addToCart': return cy.get('a.btn.btn-success.btn-lg').contains('Add to cart');
        }
    }
}