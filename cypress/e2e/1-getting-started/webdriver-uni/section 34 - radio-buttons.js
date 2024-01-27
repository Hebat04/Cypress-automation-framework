/// <reference types = "Cypress"/>


describe("Verify radio buttons via webdriveruni", () => {

//video 124

    it("Check specific radio buttons", () => {

        cy.visit("https://www.webdriveruniversity.com/")
        // get the id of the page 
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
        // using find with selector type , using first to check the first radio button
        cy.get('#radio-buttons').find("[type='radio']").first().check()
        // .eq(1) --> 1 is the index of the 2nd element
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check()
    

    })
//video 125

    it("Validate the states of specific radio buttons", () => {

        cy.visit("https://www.webdriveruniversity.com/")
        // get the id of the page 
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
        cy.get("[ value ='lettuce']").should('not.be.checked')
        cy.get("[ value ='pumpkin']").should('be.checked')
        // check the radio button that was not checked before
        cy.get("[ value ='lettuce']").check()
        cy.get("[ value ='lettuce']").should('be.checked')
        cy.get("[ value ='pumpkin']").should('not.be.checked')
        cy.get("[ value ='cabbage']").should('be.disabled')

    })

  


})