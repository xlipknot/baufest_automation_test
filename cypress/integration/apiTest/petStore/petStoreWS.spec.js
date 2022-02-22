/// <reference types="Cypress" />
import { Given } from "cypress-cucumber-preprocessor/steps";
import ApiActions from "../../Actions/ApiActions";


//-------------------------------------- Add a pet --------------------------------------
Given('I add a pet', () => {

    ApiActions.addPet();
})


//-------------------------------------- Get a pet --------------------------------------
Given('I get a pet', () => {

    ApiActions.getPet();
})


//-------------------------------------- Get a pet --------------------------------------
Given('I update a pet', () => {

    ApiActions.updatePet();
})