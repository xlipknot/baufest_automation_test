/// <reference types="Cypress" />
import { When, Then} from "cypress-cucumber-preprocessor/steps";
import Actions from "../../Actions/Actions";

When('Click on {string}',(Flights)=>{
    Actions.clickOnMenu(Flights);
})

Then('Enter {string}, {string}, {string} date and {string} date',(From,To,Departing,Returning)=>{

    Actions.selectFromToFlight(From);
    Actions.selectFromToFlight(To);
    Actions.selectDepartReturnDate(Departing);
    Actions.selectDepartReturnDate(Returning);
})

When('Click Search button',()=>{
    
    Actions.clickOnSearch();
})

Then('Sort by price {string}',(descending)=>{
    Actions.sortPricesBy(descending);
})