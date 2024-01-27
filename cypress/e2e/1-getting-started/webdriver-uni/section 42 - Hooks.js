/// <reference types = "Cypress"/>


describe("Verify radio buttons via webdriveruni", () => {
    // Video 170

  //  before = before All 
  // to solve the issue of Blank page after running Cypress tests add testIsolation: false, this configuration to cypress.config.js
   before(function() { 
        cy.visit("https://www.webdriveruniversity.com/")
        // get the id of the page 
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
    }); 

    // the second test failed with before all 

/*  beforeEach(() => {

        cy.visit("https://www.webdriveruniversity.com/")
        // get the id of the page 
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })

    });  */

    it("Check specific radio buttons", () => {


        // using find with selector type , using first to check the first radio button
        cy.get('#radio-buttons').find("[type='radio']").first().check()
        // .eq(1) --> 1 is the index of the 2nd element
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check()


    })


    it("Validate the states of specific radio buttons", () => {
        cy.reload();
        cy.get("[ value ='lettuce']").should('not.be.checked')
        cy.get("[ value ='pumpkin']").should('be.checked')
        // check the radio button that was not checked before
        cy.get("[ value ='lettuce']").check()
        cy.get("[ value ='lettuce']").should('be.checked')
        cy.get("[ value ='pumpkin']").should('not.be.checked')
        cy.get("[ value ='cabbage']").should('be.disabled')

    }) 


})