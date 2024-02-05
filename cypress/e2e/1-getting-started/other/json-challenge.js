/// <reference types ="Cypress"/>

describe('json Challenge', () => {

    it('challenge Steps', () => {

        // create a const of Array , Add 2 sets of data , extract the data with the unique key
        const exampleArrayofObjects = [
            // each time we need a different key for each object
            {"key": "Luke"},
            {"key2" : "Sophie"},
            {"key3" : 33}
        ]
       // we need to output the data 
       // we need to locate the array and reference the unique key
        cy.log(exampleArrayofObjects[0].key)
        cy.log(exampleArrayofObjects[1].key2)
        cy.log(exampleArrayofObjects[2].key3)
        
    });
    
});