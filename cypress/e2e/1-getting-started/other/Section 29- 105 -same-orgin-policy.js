
// add the following code line eith the 3 fore slashes /// to can activate cypress cy. without it , it will not work
/// <reference types="Cypress" />


describe("Cypress web security", () => {

    // we will check 2 super domains - one of linmitations because it is security measure
    it.skip("Validate visiting 2 different domains", () => {
        // .skip to skip the test
        // this test will fail with time out as the cypress cannot handle 2 super domains
        // it hanges not fail issue : https://github.com/cypress-io/cypress/issues/27349
        cy.visit("https://www.webdriveruniversity.com/")
        cy.visit("https://automationteststore.com/")

    });

    it.skip("Validate visiting 2 different domains via user actions", () => {
        cy.visit("https://www.webdriveruniversity.com/")
        // here will go to the id of the other domain and invoke remove attr and use the target as it is the attr 
        // we want to remove , then click 
        cy.get("#automation-test-store").invoke('removeAttr', 'target').click();

    });

    // The test usually fails and 1 time passed and the cypress runner handed on the page load
    it("Origin command", () => {
        
    
        cy.origin('webdriveruniversity.com', () => {
            cy.visit('/')
            
          })

        cy.origin('automationteststore.com', () => {
            cy.visit('/')
            
          })

           //when u are using the Same Origin Example: --> will pass as they are the same origin
        //cy.visit("https://www.webdriveruniversity.com");
        //cy.visit("https://selectors.webdriveruniversity.com");
    
    });

})




