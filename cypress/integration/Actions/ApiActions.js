/// <reference types="Cypress" />

import randomstring from "randomstring";

let endpoint = Cypress.env('petStoreURL');

export default class ApiActions {

    static addPet() {

        let addEndPoint = endpoint + 'v2/pet'
        cy.request({

            method: 'POST',
            url: addEndPoint,
            body: {
                "id": 202202,
                "category": {
                    "id": 22022022,
                    "name": "dog"
                },
                "name": "Max",
                "photoUrls": [
                    "./media/src/"
                ],
                "tags": [
                    {
                        "id": 10,
                        "name": "Husky"
                    }
                ],
                "status": "available"
            }
        }).then((response) => {
            cy.writeFile('cypress/fixtures/addPet/addPet.json', response);
            expect(response.status).to.eq(200);
        })
    }

    static getPet() {

        let getEndPoint = endpoint + 'v2/pet/202202';

        cy.request({

            method: 'GET',
            url: getEndPoint
        }).then((response) => {
            cy.writeFile('cypress/fixtures/getPet/getPet.json', response);
            expect(response.status).to.eq(200);
        })
    }

    static updatePet() {

        let getEndPoint = endpoint + 'v2/pet/';

        cy.request({

            method: 'PUT',
            url: getEndPoint,
            body: {
                "id": 202202,
                "category": {
                    "id": 222,
                    "name": "update"
                },
                "name": "doggie",
                "photoUrls": [
                    "new photo url"
                ],
                "tags": [
                    {
                        "id": 210,
                        "name": "xolo"
                    }
                ],
                "status": "available"
            }
        }).then((response) => {
            cy.writeFile('cypress/fixtures/updatePet/updatePet.json', response);
            expect(response.status).to.eq(200);
        })
    }

    static failAddingPet() {

        let addEndPoint = endpoint + 'v2/pet'
        cy.request({

            method: 'POST',
            url: addEndPoint,
            body: {
                "id": "asdf",
                "category": {
                    "id": 0,
                    "name": "string"
                },
                "name": "doggie",
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                        "id": 0,
                        "name": "string"
                    }
                ]
            },
            failOnStatusCode: false
        }).then((resp) => {
            cy.writeFile('cypress/fixtures/addPet/failAddPet.json', resp);
            expect(resp.status).to.eq(500);
        })
    }

    static failGettingPet() {

        let id = randomstring.generate();
        let getEndPoint = endpoint + 'v2/pet/' + id;

        cy.request({

            method: 'GET',
            url: getEndPoint,
            failOnStatusCode: false
        }).then((resp) => {
            cy.writeFile('cypress/fixtures/getPet/failGetPet.json', resp);
            expect(resp.status).to.eq(404);
        })
    }

    static failUpdatingPet() {

        let id = randomstring.generate();
        let getEndPoint = endpoint + 'v2/pet/';

        cy.request({

            method: 'PUT',
            url: getEndPoint,
            body: {
                "id": "dbckwjdncl",
                "category": {
                    "id": 222,
                    "name": "update"
                },
                "name": "doggie",
                "photoUrls": [
                    "new photo url"
                ],
                "tags": [
                    {
                        "id": 210,
                        "name": "xolo"
                    }
                ],
                "status": "available"
            },
            failOnStatusCode: false
        }).then((resp) => {
            cy.writeFile('cypress/fixtures/updatePet/updatePet.json', resp);
            expect(resp.status).to.eq(500);
        })
    }
}