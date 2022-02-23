/// <reference types="Cypress" />
import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import ApiActions from "../../Actions/ApiActions";


//-------------------------------------- Add a pet --------------------------------------
Given('I add a pet successfully', () => {

    ApiActions.addPet();
})

Then('I fail adding a pet', () => {
    ApiActions.failAddingPet();
})


//-------------------------------------- Get a pet --------------------------------------
Given('I get a pet successfully', () => {

    ApiActions.getPet();
})

Then('I fail getting a pet', () => {

    ApiActions.failGettingPet();
})


//-------------------------------------- Get a pet --------------------------------------
Given('I update a pet successfully', () => {

    ApiActions.updatePet();
})

Then('I fail updating a pet', () => {

    ApiActions.failUpdatingPet();
})