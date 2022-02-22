/// <reference types="Cypress" />
let endpoint = Cypress.env('petStoreURL');

export default class ApiActions {

    static addPet() {

        const petId = Cypress.env('petID');
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
        }).then(response => {
            cy.writeFile('cypress/fixtures/addPet.json', response);
            expect(response.status).to.eq(200);
        })
    }

    static getPet(){

        const petId = Cypress.env('petID');
        let getEndPoint = endpoint + 'v2/pet/202202';

        cy.request({

            method: 'GET',
            url: getEndPoint
        }).then(response=>{
            cy.writeFile('cypress/fixtures/getPet.json', response);
            expect(response.status).to.eq(200);
        })
    }

    static updatePet(){

        let getEndPoint = endpoint + 'v2/pet/';

        cy.request({

            method: 'PUT',
            url: getEndPoint,
            body:{
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
        }).then(response=>{
            cy.writeFile('cypress/fixtures/updatePet.json', response);
            expect(response.status).to.eq(200);
        })
    }
}