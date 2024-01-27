/// <reference types="Cypress" />

//videos 119/120
describe("Verify checkboxes via webdriveruni", () => {


    it("check and validate checkbox", () => {

        cy.visit("https://www.webdriveruniversity.com/")
        // get the id of the page 
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
        // created css selector 
        //cy.get('input[value="option-1"]').check()
        //cy.get('input[value="option-1"]').check().should('be.checked') 
        // if need to assert that is not checked .should('not.be.checked')
        // tried to use the alias
        cy.get('input[value="option-1"]').as('1stInput')
        cy.get('@1stInput').check().should('be.checked') 


    })

    //  ---- challenage videos : 121/122 ------
    
    it("check and validate checkbox 3 is unchecked", () => {

        cy.visit("https://www.webdriveruniversity.com/")
        // get the id of the page 
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
        // 1. uncheck option 3 and create an alias 
        cy.get('input[value="option-3"]').as('3rdInput')
        //  2. Assert the option 3 is not checked 
        // i added extra time to see the cypress runner validation
        cy.get('@3rdInput').uncheck().wait(2000).should('not.be.checked') 

    })

 // Videos : 123

    it("check multiple check boxes", () => {

        cy.visit("https://www.webdriveruniversity.com/")
        // get the id of the page 
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
        // check all of checkboxes as an Array of the options 
        // i created alias for this arrary and then validated the array
        cy.get("input[type='checkbox']").check(["option-1","option-2","option-3","option-4"]).as('checkboxes')
        
        cy.get('@checkboxes').should('be.checked')
        // i used the alias to uncheck them all and asserating on that
        cy.get('@checkboxes').uncheck().should('not.be.checked')
        
        

    })

// Add on Test 
    it.only("validate checkboxes using iteration by unchecking the checked and checking the unchecked", () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })

        // we need to create if logic to interact with the elements if they met the conditions
        cy.get("input[type='checkbox']").each(($el, index, $list) => {
            // i wrapped the elements to can interact with it as cyprass command and then add it to alias
            cy.wrap($el).as('option').invoke('is',':checked').then(checked => {

                     // then created if condition to check the options 
           /* cy.get('@option').uncheck()
           cy.get('@option').check().should('be.checked') */

           if(checked){
            cy.get('@option').uncheck()
            cy.wait(2000)
            cy.get('@option').should('not.be.checked')
            // Add a log with index + 1 
            cy.log("Option " + (index + 1) + " is unchecked. "  )
            
           }
             else{
                cy.wait(2000)
                cy.get('@option').check().should('be.checked')
                cy.log("Option " + (index + 1) + " is checked. ")
             }   
        
        })

            })
       
    })

})

